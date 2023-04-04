import argparse
import re
from pathlib import Path

import pandas as pd

def build_repl_dict(df: pd.DataFrame, args):
    '''
    Builds a disctionary for replacement. 
    Replace keys with values. 
    '''
    src = df[args.src_col]
    repls = df[args.tgt_col]
    
    if args.verbose:
        print("building repl dictionary...")
    
    repl_dict = {key: val for key, val in zip(src, repls)}
    
    if args.verbose:
        print("Built repl dictionary.")
        
    return repl_dict

def load_sheet(path, args):
    '''
    Read sheet as csv and return.
    '''
    
    if args.verbose:
        print('loading repl sheet...')
        
    df = pd.read_csv(path)
    df = df[df["translation_needed"]!='not sure'] # TODO: Remove this when translations are clean.
    
    if args.verbose:
        print('loaded repl sheet')
    
    return df

def replace_text_in_string(line, repl_dict):
    '''
    replaces occurances of repl_dict.keys() with values in string and returns it.
    '''
    
    for emoji, replacement in repl_dict.items():
        line = line.replace(emoji, replacement)
    
    return line

def replace_text_in_file(source_file, target_file, repl_dict, args):
    '''
    Performs replacements in source_file, and writes into target_file.
    Source and target are the same by default, but can be specified to be different.
    '''
    
    if args.very_verbose:
        print(f"Replacing text in file: {source_file}...")
    
    with open(source_file, 'r') as f:
        lines = f.readlines()
    
    new_lines = []
    
    for line in lines:
        new_line = replace_text_in_string(line, repl_dict)
        new_lines.append(new_line)
    
    if args.very_verbose:
        print(f"Replaced. Writing new text in file: {target_file}")
    
    with open(target_file, 'w') as f:
        f.writelines(new_lines)

def replace_text_all(files, repl_dict, args):
    
    for file_path in files:
        replace_text_in_file(file_path, file_path, repl_dict, args)

def get_args():
    parser = argparse.ArgumentParser()
    
    parser.add_argument('--src_col', type=str, required=True, 
                        help="columns to build keys to replace from")
    
    parser.add_argument('--tgt_col', type=str, required=False, default=None, 
                        help="columns to build values to replace to")
    
    parser.add_argument('--repl_file', type=str, required=True, 
                        help="csv file with replacement information")
    
    parser.add_argument('--dir', type=str, required=False, default='.',
                        help='''This is the directory that the localizer with walk through to make
                        The translations.''')
    
    parser.add_argument('--verbose', '-v', type=bool, default=False,
                        help="Set verbose to print checkopints.")
    
    parser.add_argument('--very_verbose', '-vv', type=bool, default=False,
                        help="Set very verbose to print more checkpoints.")
    
    args = parser.parse_args()
    print(args)
    
    if args.very_verbose:
        args.verbose = True
    
    return args

if __name__ == "__main__":
    
    args = get_args()
    print(f"Replacing Emojis from all *.ts[x] files in the directory {args.dir} using {args.repl_file}.")
    
    df = load_sheet(args.repl_file)
    repl_dict = build_repl_dict(df, args)
    files = list(Path(args.dir).rglob("*.ts[x]"))
    replace_text_all(files, repl_dict, args)