rm -rf Localized_App
mkdir -p Localized_App

cd Localized_App

git clone https://github.com/cadia-lvl/qa-crowdsourcing-app.git
git clone https://github.com/cadia-lvl/qa-crowdsourcing-api.git

cd qa-crowdsourcing-app 
git checkout localize
rm -r -f .git && cd ..

cd qa-crowdsourcing-api 
git checkout localization
rm -r -f .git && cd ..

cd ..

# TODO:
# pre-localization check.
python check_repl_sheet.py
python localization_text.py --key key --repl translation --repl_file repl_text.csv --dir Localized_App -v
python localization_emoji.py --key key --repl translation --repl_file repl_emoji.csv --dir Localized_App -v


#TODO:  Post-localization script.