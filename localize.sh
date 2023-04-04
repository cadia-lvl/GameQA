git clone https://github.com/cadia-lvl/qa-crowdsourcing-app.git
git clone https://github.com/cadia-lvl/qa-crowdsourcing-api.git

cd qa-crowdsourcing-app && rm -r -f .git && cd ..
cd qa-crowdsourcing-api && rm -r -f .git && cd ..

# TODO:
# pre-localization check.
# It asks, given the warning, do you want to continue? [y/n]
#   y: If yes, then continue with replacing with warnings.
#   n: Otherwise, stop
# Post-localization script.