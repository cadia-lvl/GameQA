import argparse
import re #TODO: Might need to remove this if not needed.
from pathlib import Path
from tabulate import tabulate
from collections import defaultdict

import pandas as pd

class ReplChecker:
    
    def __init__(self, args):
        '''
        
        '''
        self.scorecard = []
        self.df = pd.read_csv(args.repl_file)
        self.args = args
        
    def populate(self, test_name, test_result, test_note):
        '''
        
        '''
        self.scorecard.append([test_name, test_result, test_note])
    
    def show(self):
        '''
        
        '''
        print(tabulate(self.scorecard, headers=["Test", "Result", "Notes"]))
    
    def check_translation_completion(self):
        '''
        
        '''
        test_name = "Translation Completion"
        nan_count = self.df[self.args.repl].isnull().sum()
        test_note = f"{nan_count} incomplete translations"
        
        if nan_count > 0:
            test_result = "FAIL"
        
        else:
            test_result = "PASS"
        
        self.populate_checks(test_name=test_name, test_result=test_result, test_note=test_note)
    

    def check_formatted_strings(self):
        '''
        
        '''
        test_name = "Formatted Strings like ${.*}"
        regex_pattern = r"(\${.*?})"
        
        matched_formats = 0
        unmatched_formats = 0
        
        for i in range(self.df.index.size):
                
            english = self.df["english"][i]
            translation = self.df["translation"][i]
            english_formats = re.search(regex_pattern, english)
            translation_formats = re.search(regex_pattern, translation)
            
            english_format_counts = defaultdict(lambda: 0)
            
            if len(english_formats.groups()) > 0:
                for j in range(len(english_formats.groups())):
                    match = english_formats.group(j)
                    english_format_counts[match] += 1
                
                for j in range(len(translation_formats.groups())):
                    match = translation_formats.group(j)
                    if english_format_counts[match] > 0:
                        matched_formats += 1
                        english_format_counts[match] -= 1
                    
                    else:
                        unmatched_formats += 1
        
        test_note = f"{matched_formats} MATCHED string formats and {unmatched_formats} UNMATHCED string formats"
        
        if unmatched_formats == 0:
            test_result = "PASS"
        
        else:
            test_result = "FAIL"
        
        self.populate_checks(test_name=test_name, test_result=test_result, test_note=test_note)
        