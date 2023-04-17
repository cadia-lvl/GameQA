rm -rf Localized_App
mkdir -p Localized_App

pip3 install -r requirements.txt

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
python3 scripts/check_repl_sheet.py
python3 scripts/localization_text.py --key key --repl translation --repl_file repl_text.csv --dir Localized_App -v
python3 scripts/localization_emoji.py --key key --repl translation --repl_file repl_emoji.csv --dir Localized_App -v

rm text_scorecard.csv
rm emoji_scorecard.csv

# python3 localization_text.py --key key --repl translation --repl_file repl_text.csv --dir . -v # TODO: Modify to take jsut one fine as well


#TODO:  Post-localization script.
