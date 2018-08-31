# CreasantSeed

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


install angular command line tools
```
npm install -g @angular/cli
```

set default styling to scss
```
ng set defaults.styleExt scss --global
```

create new angular porject
```
ng new creasant-seed
cd creasant-seed
```

generate app-user component
```
ng generate component components/user
```

generate routing module
```
ng generate module app-routing --flat --module=app
```

generate page component
```
ng generate component pages/welcome-page
ng generate component pages/users-page
```

generate user service
```
ng generate service services/user --module=app
```

generate custom date pipe
```
ng generate pipe pipes/custom-pipe
```