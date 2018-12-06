## Understanding Angular CLI folders

Let's take a look at what we get when we create a project with the Angular CLI.

If you're like me, you don't mind knowing what's responsible for what in your application. There's so much installed here that we'll break this up into two videos.

Also, just a note: This may look a little bit different depending on what commands you've run or the version of the CLI that you're using. I recorded this course using Angular 7.

- The `src` folder is the most important folder in your project. We'll be doing most of our work here, but let's talk about the other ones.

- `e2e` is the end to end testing folder. On a more advanced application you'd want to create some tests to make sure your application works properly.

- `node_modules` is where the CLI places all of it's special files and extensions that make the automation possible

- The `.editorconfig` tells your current editor to use certain settings.

- `.gitignore` is a special file that git and github use to make sure that only certain files are used when uploading things to a server.

- `angular.json` is where the configuration for the project is. You can use this to modify how your angular installation works.

- package.json and package-lock.json are files related to how the node package manager installs and manages the extensions in the node_modules folder.

- The README.md file is where people include information about the project.

- `tsconfig.json` is a configuration file for TypeScript. When you write projects in Angular, you aren't actually using javascript. You work with a flavor of javascript called TypeScript that has some additional features. It's similar enough that you won't notice the differences.

- `tslint.json` is a configuration file for your editor that tells it how to work with your typescript installation.

That gives you a good idea of what's doing what...we're leaving the src forlder for the next video, which is where you do most of your work.
