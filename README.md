LXJS 2013
=====

<h1>Important</h1>

Only do development on a separate branch. 
All changes to master are automatically pulled to the server.

<h1>Installation</h1>

The compilation process is all done with Grunt on NodeJS.
Make sure that you're running the latest Grunt-cli.

[sudo] npm uninstall -g grunt
[sudo] npm install -g grunt-cli

Run npm install in the project folder to download the node dependencies.
In case the bake module is still not available through npm use the version bundled.

[sudo] npm install

To run compass the latest version of zurb-foundation has to be installed.
[sudo] gem install zurb-foundation

The default task is the development watcher.