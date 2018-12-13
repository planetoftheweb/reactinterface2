Let's continue our discussion of what the Create React App tool installs by looking at the rest of the files.

The `src` folder is where you'll be doing your work, but there are some other files in the public folder.

The index.html file is the main HTML that the project uses. This file is a bit different than your normal HTML document. You can see that it's missing link and script tags that point to your normal CSS and JavaScript files. That's because one of our plugins call webpack is going to put those there for us automatically.

Then there is a favicon.ico file, which is the little icon that your project uses for your browserbar.

There's a manifest file that mobile devices use when you save the application form your mobile browser as an app.

The src folder is where our code lives. There's two groups of files...an App group as well as an index group. Then there is a logo, which is something that our page shows and a serviceWorker.js file. That helps your application work offline and load a bit faster. You probably won't need to mess with that.

The index.js file is the entrypoint for the application.

It loads the libraries that it needs. When it says that it's importing from somewhere, it means that it's loading a class from a library that's in the node modules folder.

It's also loading a CSS file. That's interesting because this is just a regular CSS document. Since this is the entry point, then this is where you would add any CSS that you'd want to include in your entire application.

It's also doing the same thing for the service worker, but something interesting happens there. It doesn't use the .js extension. When your importing a JavaScript file you don't need the extension.

In the same way, it's loading your first and main component, which is in the App.js file.

Finally, it's using the ReactDOM library to and taking whatever is in the App component and looking in the index.html file for a `<root>` tag.

Let's look at the App component in the next video.
