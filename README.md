# Sugarsnaps

## Overview
A project that brings the LEVEL Employee Performance Enablement Program online as a web application.

Sugarsnaps is a MEAN Stack web application based on the Mean JS seed project
[mean-simple-auth](https://github.com/meanjs/mean-simple-auth). There is a local Mongo DB
(sugarsnaps21), an Express / Node web server with server-side routing for CRUD operations,
and Angular client-side routing for view templates. The build system uses gulp and the site
styles are written using Bootstrap and SASS and implement a SASS architecture of a main file and a series of _partial imports.

### Prerequisits
Please Note: Both Node and MongoDB must be installed before building the app;
There are many ways to install node (direct download, via homebrew), but if your dev box also needs to support apple-marcom work, using [nvm](nvm.sh) to install Node is recommended, so you can switch Node versions at will. For MongoDB, you can follow the install instructions [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

## Installation
Clone the repo by running `git clone git@gitlab.level-studios.com:level-internal/sugarsnaps.git`

From the app root, run `npm install`

Also from the app root, run 'gulp', which will among other things start the Mongo Database;

For general development, start the application via `npm run dev-debug`.  
This will start the Node.js server and automatically watch your files.

*This app is hooked up with Nodemon - meaning your changes will automagically be watched and refreshed both 
on the server and in the browser.  No more needing to restart Node or Cmd + R when you make changes to files that were already being watched.  Happy coding!  :)

### To Kill Your Node Server
Sometimes, you need to restart Node, when this happens, run `ps aux | grep node` and look for the line that ends with *node server.js*.  Here's an example:

| username |   *43125*   | 0.0 | 0.3 | 3101428 | 47440 | s002 | S | 9:54PM | 0:00.45 | *node server.js* |
|----------|-------------|-----|-----|---------|-------|------|---|--------|---------|------------------|
|          |    this #   |     |     |         |       |      |   |        |         |   this process   |


Once you have that number above, enter `kill -9 *43125*`  (but replace the number with your process number)


## Contributing
View the [Contributing Guide](https://wiki.level-studios.com/display/PROJ/Contributing+Guide) in Confluence.

## Release History
View the [CHANGELOG](CHANGELOG.md).

## License
Copyright (c) 2016 LEVEL Studios. All rights reserved.
