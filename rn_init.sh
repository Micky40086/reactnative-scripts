#!/bin/sh

if [ $# -eq 0 ]; then
  echo 'Please input <project-name>'
  exit
fi

PROJECT_NAME=$1
BASEDIR=$(dirname "$0")

echo 'create project:' $PROJECT_NAME '...'

# === init ===
react-native init $PROJECT_NAME
echo "# Vim\n*~\n*swp" >> $PROJECT_NAME/.gitignore
cp -rpf $BASEDIR/template/* $PROJECT_NAME

cd $PROJECT_NAME

# === npm ===
npm i lodash \
  react-navigation \
  react-native-elements \
  react-native-vector-icons \
  react-native-gesture-handler \
  react-navigation-header-buttons \
  react-native-storage \
  react-native-keyboard-aware-scroll-view \
  styled-components \
  react-native-safari-view --save

react-native link 

npm i react-native-stylus-transformer stylus --save

# [realm]
#npm i -g rnpm
#npm i realm --save
#rnpm link realm

# === debugger ===
brew update && brew cask install react-native-debugger

# === git ===
git init; git add .; git commit -m 'init'

# === done ===
echo "\n\ndone!"
