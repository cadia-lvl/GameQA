import argparse
from pathlib import Path
from tabulate import tabulate

import pandas as pd

class Localizer:
    
    def __init__(self, args):
        self.repl_log = []
        self.key = args.key
        self.repl = args.repl
        self.args = args
        self.files = list(Path(args.dir).rglob("*.ts")) + list(Path(args.dir).rglob("*.tsx"))
        self.build_repl_dict()
        self.load_sheet()

    def build_repl_dict(self):
        '''
        Builds a disctionary for replacement. 
        Replace keys with values. 
        
        TODO: Check to make sure that there are no double quotes.
        '''
        
        src = self.df[self.key]
        repls = self.df[self.repl]
        
        if self.args.verbose:
            print("building repl dictionary...")
        
        self.repl_dict = {key: val for key, val in zip(src, repls)}
        
        if self.args.verbose:
            print("Built repl dictionary.")

    def load_sheet(self):
        '''
        Read sheet as csv and return.
        '''
        
        if self.args.verbose:
            print('loading repl sheet...')
            
        self.df = pd.read_csv(self.args.repl_file)
        
        if self.args.verbose:
            print('loaded repl sheet')

    def replace_text_in_string(self, line):
        '''
        replaces occurances of repl_dict.keys() with values in string and returns it.
        '''
        key_count = 0
        for key, replacement in self.repl_dict.items():
            key_count += line.count(key)
            line = line.replace(key, replacement)
            
        return line, key_count

    def replace_text_in_file(self, source_file):
        '''
        Performs replacements in source_file, and writes into target_file.
        Source and target are the same by default, but can be specified to be different.
        '''
        
        if self.args.very_verbose:
            print(f"Replacing text in file: {source_file}...")
        
        file_repl_count = 0
        
        try:
            with open(source_file, 'r') as f:
                lines = f.readlines()
            
            new_lines = []
            for line in lines:
                new_line, keycount = self.replace_text_in_string(line, self.repl_dict)
                new_lines.append(new_line)
                file_repl_count += keycount
            
            if self.args.very_verbose:
                print(f"  Replaced. Writing new text in file: {source_file}")
            
            with open(source_file, 'w') as f:
                f.writelines(new_lines)
            
            log_row = [source_file, file_repl_count]
            self.repl_log.append(log_row)
        
        # TODO: How do you want to handle this?
        except Exception as e:
            print(f"Error with file {source_file}. Skipping.")
            print("========================")
            print("Error Message:")
            print(e)
            print("========================")
            
            log_row = [source_file, "ERROR"]
            self.repl_log.append(log_row)

    def replace_text_all(self):
        
        for file_path in self.files:
            self.replace_text_in_file(file_path)
    
    def show_report(self):
        print(f"############### TEXT LOCALIZATION RESULT ###############")
        print(tabulate(self.repl_log, headers=["FILE NAME", "Replacement Count"]))

def get_args():
    parser = argparse.ArgumentParser()
    
    parser.add_argument('--key', type=str, required=True, 
                        help="columns to build keys to replace from")
    
    parser.add_argument('--repl', type=str, required=False, default=None, 
                        help="columns to build values to replace to")
    
    parser.add_argument('--repl_file', type=str, required=True, 
                        help="csv file with replacement information")
    
    parser.add_argument('--dir', type=str, required=False, default='.',
                        help='''This is the directory that the localizer with walk through to make
                        The translations.''')
    
    parser.add_argument('--verbose', '-v', default=False, action='store_true',
                        help="Set verbose to print checkopints.")
    
    parser.add_argument('--very_verbose', '-vv', default=False, action='store_true',
                        help="Set very verbose to print more checkpoints.")
    
    args = parser.parse_args()
    
    if args.very_verbose:
        args.verbose = True
        
    if args.verbose:
        print(args)
    
    return args

def check_repl():
    df = pd.read_csv("text_scorecard.csv")
    results = df["Results"]
    if "FAIL" in results:
        print(f"Exiting localization_text without localization.")
        exit(1)
    
if __name__ == "__main__":
    
    check_repl()
    
    args = get_args()
    print(f"Replacing Text from all *.ts[x] files in the directory {args.dir} using {args.repl_file}.")
    
    localizer = Localizer(args)
    localizer.replace_text_all()
    localizer.show_report()