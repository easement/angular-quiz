#!/bin/sh

if [ `uname` -eq "Linux" ]; then
  sudo npm install -g grunt-cli bower
else
  npm install -g grunt-cli bower
fi

npm install
bower install
bundle install
