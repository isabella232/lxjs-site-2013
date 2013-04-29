#!/bin/sh
cd "`dirname "$0"`";
npm uninstall -g grunt;
npm install;
sudo gem install zurb-foundation;