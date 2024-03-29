# Angular Notes
[Master-Class-Angular-18-05-2023.pdf](https://github.com/i-m-prabhat/Angular/files/11574085/Master-Class-Angular-18-05-2023.pdf)

## Introduction to Angular

Angular is a popular open-source web application framework developed by Google. It is used for building dynamic, single-page web applications (SPAs) with a focus on simplicity, modularity, and maintainability. Angular provides a powerful set of tools and features that simplify the development process and promote code reusability.

### Key Concepts:

1. **Model-View-Controller (MVC) Architecture:** Angular follows the MVC architectural pattern, where the application logic is divided into three components:
   - Model: Represents the data and business logic of the application.
   - View: The user interface that displays the data to the user.
   - Controller: Acts as an intermediary between the Model and the View, handling user interactions and updating the Model accordingly.

2. **TypeScript:** Angular is built with TypeScript, a superset of JavaScript that adds static typing and other advanced features to the language. TypeScript makes the code more robust, maintainable, and easier to debug.

3. **Templates:** Angular uses HTML templates to define the user interface. Templates include data bindings, directives, and other elements that control the rendering of data.

4. **Components:** Components are the building blocks of an Angular application. Each component encapsulates a specific part of the user interface, consisting of a template, a class, and styles.

5. **Services:** Services are used to share data and functionality across multiple components. They help keep the application logic separate from the user interface and facilitate code reusability.

## Angular Architecture

Angular's architecture is based on components and modules, promoting a modular and organized approach to building applications.

### Components:

- Components are reusable, self-contained units that define the user interface and its behavior.
- Each component has a template that defines the HTML structure and bindings, and a class that handles the component's logic.
- The @Component decorator is used to define metadata for the component, such as selector, template, and styles.

### Modules:

- Modules are logical containers for organizing related components, services, directives, and pipes.
- The root module of an Angular application is typically named AppModule, which is defined in the app.module.ts file.
- Feature modules can be created to group functionality specific to certain parts of the application.

### Templates:

- Templates are written in HTML and contain Angular-specific syntax for data binding, directives, and other Angular features.
- Data binding allows you to connect data from the component's class to the template, making it dynamic and reactive to changes.

## Data Binding in Angular

Data binding is a powerful feature in Angular that establishes a connection between the component's data and the template, enabling dynamic rendering of the user interface.

### Types of Data Binding:

1. **Interpolation ({{ data }}):** Interpolation allows you to display data from the component's class in the template. For example: `<h1>{{ title }}</h1>`

2. **Property Binding ([property]="data"):** Property binding sets the value of an element's property based on the component's data. For example: `<img [src]="imageUrl">`

3. **Event Binding ((event)="handler()"):** Event binding allows you to react to user events, like clicks or keystrokes, and invoke methods in the component's class. For example: `<button (click)="submitForm()">Submit</button>`

4. **Two-Way Binding ([(ngModel)]="data"):** Two-way binding combines property binding and event binding, allowing data to flow in both directions between the component and the template. For example: `<input [(ngModel)]="username">`

### Directives in Angular

Directives are special instructions in the HTML markup that tell Angular to modify or manipulate the DOM.

### Types of Directives:

1. **Attribute Directives:** Attribute directives modify the appearance or behavior of an element. They are applied using HTML attributes. Examples include `[ngStyle]` and `[ngClass]`.

2. **Structural Directives:** Structural directives change the structure of the DOM by adding or removing elements. They are applied using an asterisk (*) before the directive name. Examples include `*ngIf` and `*ngFor`.

## Angular Services and Dependency Injection

Services play a crucial role in Angular applications by providing shared functionality and data to various parts of the application. Angular's built-in dependency injection (DI) system facilitates the use of services throughout the application.

### Services:

- Services are plain TypeScript classes that provide specific functionality, such as data retrieval, authentication, or logging.
- They are typically singleton instances, meaning there is only one instance of the service throughout the application.
- Services are defined using the @Injectable decorator to allow them to be injected into other components or services.

### Dependency Injection:

- Dependency Injection is a design pattern in which a class receives its dependencies from external sources rather than creating them itself.
- Angular's DI system handles the injection of dependencies into components and services, making them more modular and easier to test.

## Angular Routing and Navigation

Angular Router is used to navigate between different views and components within a single-page application.

### Routing Configuration:

- Routes are defined in the RouterModule, specifying the components to load for each route and the corresponding URL paths.
- The AppRoutingModule is typically used to define the main routing configuration for the entire application.

### Navigation:

- Angular provides several methods for navigation, including router links in templates and programmatically navigating using the Router service.
- Route parameters and query parameters can be used to pass data between components and maintain application state.

### Lazy Loading:

- Lazy loading is a feature that allows loading specific modules only when they are needed, reducing the initial loading time of the application.
- Feature modules can be lazy-loaded, making them available on-demand as the user navigates to specific routes.

## Angular Forms

Angular provides two approaches for handling user input: Template-driven forms and Reactive forms.

### Template-driven forms:

- Template-driven forms are defined in the HTML template using Angular-specific form directives.
- The form controls are automatically created based on the template, making it suitable for simple forms with minimal validation.

### Reactive forms:

- Reactive forms are built programmatically using TypeScript, providing more control and flexibility over form validation and submission.
- The form controls are explicitly created in the component's class, allowing complex validation rules and dynamic form structure.

## Angular HTTP Client

The Angular HTTP client is used to make HTTP requests to APIs and servers.

### HTTP Methods:

- The HTTP client supports various HTTP methods like GET, POST, PUT, DELETE, etc., for interacting with RESTful APIs.

### Observables:

- HTTP requests return Observables, which are used to handle responses asynchronously and manage data streams.

### Error Handling:

- The HTTP client provides mechanisms for error handling, allowing graceful handling of errors and displaying meaningful error messages to users.

## Angular CLI (Command Line Interface)

Angular CLI is a powerful command-line tool that simplifies various tasks related to Angular development.

### Key Features:

1. **Project Creation:** The CLI allows you to create a new Angular project with a single command, setting up the initial structure and configurations.

2. **Code Generation:** Angular CLI offers commands to generate components, services, modules, and other artifacts, reducing boilerplate code.

3. **Serve and Build:** The CLI includes a development server for running the application locally during development. It can also build optimized production-ready bundles for deployment.

4. **Testing:** The CLI supports running unit tests and end-to-end tests using popular testing frameworks like Jasmine and Protractor.

## Angular Design Principles

Angular follows several design principles that guide developers in building scalable and maintainable applications.

### Key Principles:

1. **Separation of Concerns:** Angular encourages separating different concerns, such as data, presentation, and business logic, to improve code readability and maintainability.

2. **Modularity:** Angular applications are divided into modules, each focused on specific functionality. This modularity helps in organizing code and promoting reusability.

3. **Dependency Injection:** The use of dependency injection promotes loose coupling between components and services, making the application more flexible and testable.

4. **Reusability:** Angular components, services, and modules are designed to be reusable across different parts of the application, reducing redundancy and improving efficiency.

5. **Single Responsibility Principle (SRP):** Each component or service should have a single responsibility, making it easier to understand and maintain.

6. **Consistency:** Angular enforces coding conventions and follows a consistent design pattern, making it easier for developers to work collaboratively on projects.



# Setting up the Local Environment and Workspace

## Prerequisites
To install Angular on your local system, you need the following:

| REQUIREMENTS     | DETAILS                                                                                                             |
|------------------|---------------------------------------------------------------------------------------------------------------------|
| Node.js          | Angular requires an active LTS or maintenance LTS version of Node.js. For information, see the version compatibility guide. For more information on installing Node.js, see [nodejs.org](https://nodejs.org). If you are unsure what version of Node.js runs on your system, run `node -v` in a terminal window. |
| npm package manager | Angular, the Angular CLI, and Angular applications depend on npm packages for many features and functions. To download and install npm packages, you need an npm package manager. This guide uses the npm client command line interface, which is installed with Node.js by default. To check that you have the npm client installed, run `npm -v` in a terminal window. |

## Install the Angular CLI

You can use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

To install the Angular CLI, open a terminal window and run the following command:

```
npm install -g @angular/cli
```

On Windows client computers, the execution of PowerShell scripts is disabled by default. To allow the execution of PowerShell scripts, which is needed for npm global binaries, you must set the following execution policy:

```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Carefully read the message displayed after executing the command and follow the instructions. Make sure you understand the implications of setting an execution policy.

## Create a workspace and initial application

You develop apps in the context of an Angular workspace.

To create a new workspace and initial starter app:

Run the CLI command `ng new` and provide the name `my-app`, as shown here:

```
ng new my-app
```

The `ng new` command prompts you for information about features to include in the initial app. Accept the defaults by pressing the Enter or Return key.

The Angular CLI installs the necessary Angular npm packages and other dependencies. This can take a few minutes.

The CLI creates a new workspace and a simple Welcome app, ready to run.

## Run the application

The Angular CLI includes a server, for you to build and serve your app locally.

Navigate to the workspace folder, such as `my-app`.

Run the following command:

```
cd my-app
ng serve --open
```

The `ng serve` command launches the server, watches your files, and rebuilds the app as you make changes to those files.

The `--open` (or just `-o`) option automatically opens your browser to `http://localhost:4200/`.

If your installation and setup were successful, you should see a page similar to the following:

```
Welcome to my-app!
```


# Angular CLI Commands

1. `ng add <collection>`:
   Adds support for an external library to your project.

2. `ng analytics`:
   Configures the gathering of Angular CLI usage metrics.

3. `ng build [project]`:
   Compiles an Angular application or library into an output directory named dist/ at the given output path.
   Aliases: `ng b`

4. `ng cache`:
   Configure persistent disk cache and retrieve cache statistics.

5. `ng completion`:
   Set up Angular CLI autocompletion for your terminal.

6. `ng config [json-path] [value]`:
   Retrieves or sets Angular configuration values in the angular.json file for the workspace.

7. `ng deploy [project]`:
   Invokes the deploy builder for a specified project or for the default project in the workspace.

8. `ng doc <keyword>`:
   Opens the official Angular documentation (angular.io) in a browser, and searches for a given keyword.
   Aliases: `ng d`

9. `ng e2e [project]`:
   Builds and serves an Angular application, then runs end-to-end tests.
   Aliases: `ng e`

10. `ng extract-i18n [project]`:
    Extracts i18n messages from source code.

11. `ng generate`:
    Generates and/or modifies files based on a schematic.
    Aliases: `ng g`

12. `ng lint [project]`:
    Runs linting tools on Angular application code in a given project folder.

13. `ng new [name]`:
    Creates a new Angular workspace.
    Aliases: `ng n`

14. `ng run <target>`:
    Runs an Architect target with an optional custom builder configuration defined in your project.

15. `ng serve [project]`:
    Builds and serves your application, rebuilding on file changes.
    Aliases: `ng s`

16. `ng test [project]`:
    Runs unit tests in a project.
    Aliases: `ng t`

17. `ng update [packages..]`:
    Updates your workspace and its dependencies. See https://update.angular.io/.

18. `ng version`:
    Outputs Angular CLI version.



# Folder Structure of an Angular Project

```
angular-project/
├── e2e/
├── node_modules/
├── src/
│   ├── app/
│   ├── assets/
│   ├── environments/
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   └── test.ts
├── .angular.json
├── .editorconfig
├── .gitignore
├── angular.json
├── karma.conf.js
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
├── tslint.json
└── README.md
```

1. **e2e/:**
   - This folder contains end-to-end tests written using tools like Protractor for testing the application's functionality from the user's perspective.

2. **node_modules/:**
   - This folder contains all the third-party dependencies installed via npm or yarn.

3. **src/:**
   - The `src/` folder is the heart of the Angular project, containing all the source code of the application.
   - The `app/` folder contains the components, modules, services, and other application-specific files.
   - The `assets/` folder is used to store static assets like images, fonts, and other files used by the application.
   - The `environments/` folder contains environment-specific configuration files.

4. **src/app/:**
   - The `app/` folder is where most of the application logic resides.
   - It contains various Angular components, services, modules, and other related files.

5. **src/assets/:**
   - The `assets/` folder holds static assets like images, fonts, and other files that need to be bundled with the application.

6. **src/environments/:**
   - The `environments/` folder contains environment-specific configuration files like environment.ts and environment.prod.ts.

7. **src/favicon.ico:**
   - This is the application's favicon, the small icon displayed in the browser tab.

8. **src/index.html:**
   - The `index.html` file is the main HTML file that serves as the entry point for the application. It contains the root component and other scripts and stylesheets.

9. **src/main.ts:**
   - The `main.ts` file is the main entry point of the application. It bootstraps the root module of the application and starts the application.

10. **src/polyfills.ts:**
    - The `polyfills.ts` file contains polyfills to support older browsers and ensure that the application runs smoothly across different environments.

11. **src/styles.scss:**
    - The `styles.scss` file is the main stylesheet of the application, where global styles and CSS variables can be defined.

12. **src/test.ts:**
    - The `test.ts` file is the entry point for the test setup. It configures and loads the necessary dependencies for running tests.

13. **angular.json:**
    - The `angular.json` file contains project-specific configurations, such as build options, assets, and environment settings.

14. **.editorconfig:**
    - The `.editorconfig` file contains editor settings for maintaining consistent coding styles across the development team.

15. **.gitignore:**
    - The `.gitignore` file specifies which files and folders should be ignored by version control systems like Git.

16. **karma.conf.js:**
    - The `karma.conf.js` file contains the configuration for the Karma test runner used for unit testing.

17. **package.json:**
    - The `package.json` file holds metadata and dependencies of the project, including scripts for tasks like building, testing, and serving the application.

18. **tsconfig.app.json:**
    - The `tsconfig.app.json` file contains TypeScript compiler options specific to the Angular application.

19. **tsconfig.json:**
    - The `tsconfig.json` file is the base TypeScript configuration file for the project.

20. **tsconfig.spec.json:**
    - The `tsconfig.spec.json` file contains TypeScript compiler options for running tests.

21. **tslint.json:**
    - The `tslint.json` file defines the linting rules and configurations for the TypeScript code.

22. **README.md:**
    - The `README.md` file typically contains project documentation, explaining how to set up and run the application.
