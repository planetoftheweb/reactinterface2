# How Angular Projects Process

Let's explore how Angular Projects load and process.

## main.ts

An angular application begins with file called `main.ts`. It's the loader for our entire application. It also loads the library the project needs, so you can see that the first two commands load up the libraries from our node modules folder.

After that we're loading our AppModule class from the app.module file in the app directory. This is our main module and loads every other module in an app.

We're checking to see if the environment is set to production or not. This is being managed by webpack automatically for you and what happens is controlled by the files in the environment folder.

Finally we're starting or bootstrapping our application in this last command. We're working with a web project, so notice that platformBrowserDynamic is loading with our main component.

You probably won't need to do anything with this file, just to understand that it starts everything.

## src/app.module

Since our app module loads next, let's take a look at that.

This file is loading some other modules from our the `@angular` folder. Angular itself is built in such a way that everything is broken into little pieces of code called components and modules so that it smaller piece of code instead of an entire library.

This module loads our first component called app.component.

next up, we have something that might look at bit odd and it's a decorator. Think of a decorator as a setup object. It looks a lot like a JavaScript object. It adds information to an existing module or component. You'll be using these a lot. One thing to note is that decorators don't get a semicolon at the end...I know, you're probably used to seeing these from Angular, but resist the temptation or you'll get an error.

The decorator describes in our case that we're getting whatever the AppComponent returns from the file we just loaded. It also needs the BrowserModule from our Angular library and sets those up to work.

You probably won't need to mess with this file. Also, when you use the Angular CLI, you'll see that it will add some files here.

## src/app/app.component.ts

Alright, we're getting closer to the good stuff. the app.component.ts file is where you load up all of the components that make up your application. It's sort of like the `<body>` tag in HTML.

You can see we load up a component from our `@angular` library in `node_modules` and then we use a decorator to configure it. We're identifying the selector for our application. Our application is going to look for a tag named `<app-root>` in our index.html file and load our application there.

Then we identify the location of template and the css. You don't actually need to use either of these. You could write all of that stuff inside this file. The css will only be applied to the component when it exists on the page.

Let's take a look at our export command. Here we're creating what our component exports. All we're exporting for right now is a single variable called title. We can use that variable in our template to output something.

Now that we've set things up, let's start our server with the ng serve command. From now I'll start every video with the ng serve command already running.
