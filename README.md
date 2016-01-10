jspm-test-app
=============

This project is an example setup of how to use JSPM to create a static bundle without including any 3rd party
scripts (such as angular) and other 3rd party scripts that may not export anything (angular-bootstrap).

Just run an `npm install` and `jspm install`. 

- package.json is configured with jspm@0.16.15
- Run a simple HTTP server with this as the root (`live-server`, `python -m SimpleHTTPServer`, etc.)
- There are 2 test pages.
  - `/test/uncompiled.html` - This runs JSPM itself. 
  - `/test/compiled.html` - Runs with the bundle, angular, etc are all linked via CDN.
- the gulp task is `jspm`. It will create the dist folder.
