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

Start the Mongo deamon with `mongod &`

Start the gulp script via `gulp` to compile sass into css

In a new Terminal window, start the app with `npm run start`

Hit [http://localhost:3000](http://localhost:3000) in your favorite browser


## Contributing
View the [Contributing Guide](https://wiki.level-studios.com/display/PROJ/Contributing+Guide) in Confluence.

## Release History
View the [CHANGELOG](CHANGELOG.md).

## License
Copyright (c) 2016 LEVEL Studios. All rights reserved.
