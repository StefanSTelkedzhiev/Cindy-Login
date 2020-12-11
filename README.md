Project Cindy

Cindy е платформа е платформа за оферти за работа.

Посетителите трябва да се регистрират/логнат за да може да създават оферти или виждат списъка от създадени оферти.


Backend & Database

За сървър и датабаза ползвах backendless (https://backendless.com/): 

* В датабазата имам 2 таблици:
    * Person (за потребителски данни)
    * Offer (за данни за офертите)

Backendless прави лесно аутентикацията както и добавянето и четене на обекти от датабазата. Също така, лесна е и проверката дали потребителя е аутентикиран: Backendless.UserService.isValidLogin().


Front End

За попълване на дата използвах Reactive forms (https://angular.io/guide/reactive-forms) с (click) функции на бутони.

За навигация използвах @angula/router.

Защитих пътищата, които трябва да се виждат само от аутентикирани потребители, като в ngOnInit валидирам потребителя.

За стилове реших да ползвам Bootstrap (https://getbootstrap.com/docs/5.0/getting-started/introduction/) тъй като съм по-запознат с библиотеката.

# CindyLogin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
