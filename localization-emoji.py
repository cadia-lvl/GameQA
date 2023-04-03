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
    
    repl_dict = {}
    for key,val in zip(src, repls):
        repl_dict[key] = val
    
    print("build dict")
    return repl_dict

def load_sheet(path):
    '''
    Read sheet as csv and return.
    '''
    df = pd.read_csv(path)
    df = df[df.repo == 'qa-crowdsourcing-api']
    df = df[df["translation_needed"]!='not sure']
    
    print('loaded sheet')
    return df

def replace_text_in_string(line, repl_dict):
    '''
    replaces occurances of repl_dict.keys() with values in string and returns it.
    '''
    
    for key, value in repl_dict.items():
        
        occurances = [(m.start(), m.end()) for m in re.finditer(key, line)]
        
        # STEP 2: Split at positions, and inset value
        for start,end in occurances:
            left = line[:start]
            right = line[end:]
            assert type(left) == str and type(right) == str and type(value) == str, f"types are weird. Left - {type(left)} {left};  Right - {type(right)} {right};  value - {type(value)} {value}"
            line = left + value + right
    
    return line
    # raise NotImplementedError

def replace_text_in_file(source_file, target_file, repl_dict):
    
    with open(source_file, 'r') as f:
        lines = f.readlines()
    
    new_lines = []
    
    for line in lines:
        new_line = replace_text_in_string(line, repl_dict)
        new_lines.append(new_line)
    
    with open(target_file, 'w') as f:
        f.writelines(new_lines)

def replace_text_all(files, repl_dict):
    
    for file_path in files:
        replace_text_in_file(file_path, file_path, repl_dict)

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
    
    args = parser.parse_args()
    print(args)
    
    return args

if __name__ == "__main__":
    
    args = get_args()
    df = load_sheet(args.repl_file)
    repl_dict = build_repl_dict(df, args)
    files = list(Path(args.dir).rglob("*.ts[x]"))
    replace_text_all(files, repl_dict)
    
    
        