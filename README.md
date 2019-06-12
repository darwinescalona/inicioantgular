
# NgChileautos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




## 1.- Intalación CLI 
	npm install -g @angular/cli

## 2.- Creación de aplicación (tag: Inicio)
	ng new ng-chileautos
	cd ng-chileautos
	ng serve

## 3.- Crear componente
	ng generate component listaPaises --spec false --inline-template --inline-style
	ng generate component listaEstados --spec false

### 3.1.- Instalando boostrap
  npm install bootstrap jquery popper
  npm install font-awesome
  Agregar los estilos de bootstrap a angular.json
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              “node_modules/font-awesome/css/font-awesome.css”,
              "src/styles.scss"
            ],
