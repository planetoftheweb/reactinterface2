The index.js file is loading our main component, which is called App, so let's take a look at that.

The other components you build are going to be in this format.

We're loading the main React object as well as an object called Component.

Because we're using a logo, we can also load that and place it into a variable called logo. You'll see how that's used in a minute.

We're also importing some CSS. The index.css applies to everything in our application. This is a separate CSS file that will only load when this component is loaded. One of the nice things about this approach is that you don't have to make one huge CSS document with all your styles.

Next, using the class command, we create a new class we're calling app here. This class is based on another class called component, which we imported before.

Inside that class, we issue the render method. This method is the main place where things happen in your app. And it returns what you're going to show in the HTML-like tag that uses this component. In our case, it's the `<App>` tag in the index.html document.

What it's returning might seem both familiar and a bit weird to you. It's called JSX and it's a templating language that's a combination of HTML and JavaScript.

So you can see here that instead of using class in our HTML, you have to use className. That's because JavaScript already uses a class keyword.

The other weird thing about this JSX is the use of the `{logo}` variable. The curly brace is what we call an expression in a templating language. It's a place to place the value of a variable or a formula, which in this case is the logo we imported earlier.

One last thing about this component that's not apparent. The return statement can only return one single object. Notice that there's a parent DIV that contains all our HTML. It won't work if I try to add another DIV, so just remember...a single container in the return.

Let's see this component in action. Open up a terminal and execute the `npm start` command. It's a good idea to try playing around with the JSX and make it your own to get used to things like classname.
