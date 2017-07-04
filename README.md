# Devonfw Angular 2 Kickstarter

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.18.

**UPDATE:** 
- Angular CLI has been updated to 1.0.0 version. 
- This project has been updated to Angular 4.

Please follow the upgrading instructions [at the end](https://github.com/devonfw/devonfw-angular2-kickstarter#update-the-project) of this README or in the [Introduction](https://github.com/devonfw/devonfw-angular2-kickstarter/wiki#upgrading-from-previous-versions) of the Wiki to upgrade this project. 

## Install the project

Clone this repository and use **npm** or **Yarn**. 

### npm

In the terminal run the following commands:

```bash
$ npm install 
$ npm start
``` 

### Yarn

Project tested with the latest [Yarn](https://yarnpkg.com/lang/en/) version. Instead of using `npm` you can do the following:

```bash
$ yarn # Use --ignore-engines flag if you have issues installing dependencies
$ yarn start
``` 

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Update the project

In order to update Angular CLI globally follow the nest steps:

```
$ npm uninstall -g angular-cli @angular/cli 
$ npm cache clean
$ npm install -g @angular/cli 
```

If you have a previous version of this project you must update the node modules:

### Using Yarn

Windows:
```bash
$ rmdir /s node_modules
$ rmdir /s dist
$ yarn
$ yarn start
```

Linux or macOS:
```bash
$ rm -rf node_modules dist
$ yarn
$ yarn start
```

### Using npm

Windows:
```bash
$ rmdir /s node_modules
$ rmdir /s dist
$ npm install
$ npm start
```

Linux or macOS:
```bash
$ rm -rf node_modules dist
$ npm install
$ npm start
```

## Dockerize

Inside of this project there are two files that contribute to its process of _Dockerization_: **Dockerfile** and **dockerize.sh**. The shell file has the options of:

```bash
$ npm install    # installs packages via npm
$ ng build       # builds the application in a way that NGINX can serve it
$ docker build   # builds a nginx-based docker image from the already built project
$ docker push    # push the created image to your own repository in the Docker Hub (optional)
$ docker run     # deploy the docker image into your Docker Machine (optional)
```

To use this option, you will have to execute this script from your `boot2docker` console. If you don't specify the name of your docker image ( `[docker_image_name` ) the name `devonfw-kickstarter` will be set by default-

```bash
$ cd /path/to/devonfw-angular2-kickstarter/docker
$ ./dockerize.sh [docker_image_name]
```