# SETOK

## SetokClientWebApi

asp dot net web api using minimal web api setup

### Database Migrations

Model changes result in database migrations. Run these terminal commands 'setok.db' project/folder to update or generate database:

EF tools (needed for cli commands):
dotnet tool install --global dotnet-ef --version=6.0.8

Update/Generate database:
dotnet ef database update

In order to add migration run:
dotnet ef migrations add 'your_migration_description'

When you run into issues a manual delete of database file could be needed, delete this file:
C:\Users\{username}\AppData\Local\setok.db

## SetokClientAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Generate api services Angular

ng-openapi-gen --input ..\setok-dotnet\setok.webapi\swagger.yml --output src/app/api

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
