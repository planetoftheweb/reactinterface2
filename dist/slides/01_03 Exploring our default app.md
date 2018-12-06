# Exploring our src folders

Let's keep our exploration of what you get when you create an angular project with the CLI with what's in our src folder.

- `app` is where your main application code goes. This is where we'll be doing the majority of our programming.

- `assets` is where you place things like images and data that you want Angular to load. Right now, there's an empty

`.gitkeep` file there. That's because github won't upload a folder unless it's empty so this little empty file makes sure that the folder uploads even when it's empty. Once you put something in here, you won't need this file anymore.

- The `environments` folder has a couple of files that lets you customize your programming environment. You can see that there are two files. A regular file and a prod file. The prod file would be used when you run an ng build command to build your final project.

- `browserlist` has some configuration for how your css will magically pre fixed for older browser.

- There are some common web files like the `favicon.ico` file which shows a little icon on the corner of your browserbar

- The index.html file is the HTML document that your app shows up in. Notice some interesting things about it. It doesn't import any css or javascript. That's magically handled by a plugin called webpack which is doing most of the heavy lifting in the automation.

There's also a special tag here called `<app-root>`. This is where your application is loaded. You can customize your index.html file a bit, but don't go too crazy.

- `karma.conf.js` is a configuration file for karma, which is another testing framework. Yes, the Angular folks are really into testing.

- `main.ts`. This is the entry point and essentially loads your application. It's not something you need to worry about too much, part of what . We'll go into this in a later video.

- `pollyfill.ts` lets you configure how your application works in older browser by loading modules that do some transformations for you.

- `styles.css` has the styles for your application. This is where you should place global styles that you want your entire page to have. You cona also ignore this if you don't need it.

- `test.ts`. This is the main test file for your application.

- `tsconfig.app.json`, `tsconfig.spec.json` and `tslint.json` are just local versions for the files we already saw in the main folder.

There's a lot of files in there, and we'll only be working with some of them in our application, but I think it's important to know what they are and have an idea of what they do.
