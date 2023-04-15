import argparse
import re #TODO: Might need to remove this if not needed.
from pathlib import Path

import pandas as pd

def build_repl_dict(df: pd.DataFrame, args):
    '''
    Builds a disctionary for replacement. 
    Replace keys with values. 
    
    TODO: Include a check for ${} javascipt f-strings for exact matches. 
        In english and translation columns.
    
    TODO: Check to make sure that there are no double quotes.
    '''
    src = df[args.key]
    repls = df[args.repl]
    english = df["english"]
    
    if args.verbose:
        print("building repl dictionary...")
    
    repl_dict = {key: val for key, val in zip(src, repls)}
    
    if args.verbose:
        print("Built repl dictionary.")
    
    # TODO: Check if we want to do this here or while replacing (just skip the case and carry on).
    test_string = "This is a test string to check for existing replacements."
    for key, replacement in repl_dict.items():
        try:
            test_string.replace(key, replacement)
        
        except TypeError:
            print(f"[WARNING] Key: '{key}' likely has no corresponding value in the {args.repl} column in your specified {args.repl_file}. This key is currently being skipped. Please update your repl_file and run this replacement again for this key to be updated.")
        
    return repl_dict

def load_sheet(args):
    '''
    Read sheet as csv and return.
    '''
    
    if args.verbose:
        print('loading repl sheet...')
        
    df = pd.read_csv(args.repl_file)
    df = df[df["translation_needed"]!='not sure'] # TODO: Remove this when translations are clean.
    

    # TODO: Check if we want to do this here or loading sheet (block from going ahead)
    # nan_count = df[args.repl].isnull().sum()
    # if nan_count > 0: 
    #     raise TypeError(f"your repl file has {nan_count} nan values in the repl column. Please update and try again.")
    
    if args.verbose:
        print('loaded repl sheet')
    
    return df

def replace_text_in_string(line, repl_dict):
    '''
    replaces occurances of repl_dict.keys() with values in string and returns it.
    '''
    
    # for key, value in repl_dict.items():
        
    #     occurances = [(m.start(), m.end()) for m in re.finditer(key, line)]
        
    #     for start,end in occurances:
    #         left = line[:start]
    #         right = line[end:]
    #         assert type(left) == str and type(right) == str and type(value) == str, \
    #             f"types are weird. Left - {type(left)} {left};  Right - {type(right)} {right};  value - {type(value)} {value}"
    #         line = left + value + right
    #TODO: Test new version before finalizing. If it doenst work, use above code.
    
    for key, replacement in repl_dict.items():
        try:
            line = line.replace(key, replacement)
        except TypeError:
            continue
        
    
    return line

def replace_text_in_file(source_file, target_file, repl_dict, args):
    '''
    Performs replacements in source_file, and writes into target_file.
    Source and target are the same by default, but can be specified to be different.
    '''
    
    if args.very_verbose:
        print(f"Replacing text in file: {source_file}...")
    
    try:
        with open(source_file, 'r') as f:
            lines = f.readlines()
        
        new_lines = []
        
        for line in lines:
            new_line = replace_text_in_string(line, repl_dict)
            new_lines.append(new_line)
        
        if args.very_verbose:
            print(f"  Replaced. Writing new text in file: {target_file}")
        
        with open(target_file, 'w') as f:
            f.writelines(new_lines)
    
    # TODO: How do you want to handle this?
    except Exception as e:
        print(f"Error with file {source_file}. Skipping.")
        print("========================")
        print("Error Message:")
        print(e)
        print("========================")

def replace_text_all(files, repl_dict, args):
    
    for file_path in files:
        replace_text_in_file(file_path, file_path, repl_dict, args)

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

if __name__ == "__main__":
    
    args = get_args()
    print(f"Replacing Text from all *.ts[x] files in the directory {args.dir} using {args.repl_file}.")
    
    df = load_sheet(args)
    repl_dict = build_repl_dict(df, args)
    files = list(Path(args.dir).rglob("*.ts")) + list(Path(args.dir).rglob("*.tsx"))
    replace_text_all(files, repl_dict, args)
    
    '''
    TODO: Give an itemized report of how many replacememts were made, 
    how many translation keys were found, and how many are left.
    
    AND in what files they are present.
    '''