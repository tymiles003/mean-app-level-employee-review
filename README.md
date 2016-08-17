## Project Sugarsnaps
A project that brings the LEVEL Employee Performance Enablement Program online as a web application. Please note: This readme should be updated as new functionality is available or app structure changes.

## Tech Stack
Sugarsnaps is a MEAN Stack web application based on the Mean JS seed project
[mean-simple-auth](https://github.com/meanjs/mean-simple-auth). There is a local Mongo DB
(sugarsnaps21), an Express / Node web server with server-side routing for CRUD operations,
and Angular client-side routing for view templates. The build system uses gulp and the site
styles are written using Bootstrap and SASS and implement a SASS architecture of a main file and a series of _partial imports.

## Tech Setup

### Prereqs
Please Note: Both Node and MongoDB must be installed before building the app;
There are many ways to install node (direct download, via homebrew), but if your dev box also needs to support apple-marcom work, using [nvm](nvm.sh) to install Node is recommended, so you can switch Node versions at will. For MongoDB, you can follow the install instructions [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

### Building / Running the App
* Clone the repo from [http://gitlab.level-studios.com/level-internal/sugarsnaps.git](http://gitlab.level-studios.com/level-internal/sugarsnaps.git)
* from the app root dir, run $ npm install
* from the app root dir, run gulp to compile the sass into css
* from Terminal, run $ mongod to start the mongo daemon
* optionally from another Terminal tab, run $ mongo to start the mongo client (handy for seeing db collections, running test queries. etc)
* open another Terminal window, and from the app root dir, run npm start
* Hit http://localhost:3000 in your favorite browser
