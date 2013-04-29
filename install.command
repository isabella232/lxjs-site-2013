#!/bin/sh
cd "`dirname "$0"`";
npm uninstall -g grunt;
npm install;
gem install zurb-foundation;