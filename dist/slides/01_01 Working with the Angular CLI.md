<!-- .slide: data-state="title" -->

# Angular

Building an Interface

> > Author Notes:

The angular CLI or Command line interface makes it easy to create Angular applications by automating some of the steps. You can get the CLI at this URL.

---

## Angular CLI

- [Node](https://nodejs.org/)
- [Git](https://git-scm.com/)
- Uses terminal
- `ng new`, `ng serve`, `ng build`

> > Author Notes:

The [CLI](https://cli.angular.io/) requires that you have node.js, which you can get at this URL and includes something called the Node Package Manager for managing extensions. In this course, we're aslog going to use Git and Github, which you can get at this URL and helps you manage web projects.

You should be familiar working with both of those. I also recommend that when you install git, you install the gitbash tool if you're on a PC to help you write linux type commands. Thankfully we have some great courses that can help you with NPM, Github and the terminal if you want to dive deeper.

- The three main commands that you can use when working with the CLI are ng new, which creates a new application for you, ng serve, which creates a environment that reloads when you make changes for testing and `ng build`, which creates a distribution folder you upload to a server when the application is ready.

# Installing

To install the Angular CLI, we're going to type in `npm install -g @angular/cli`. Again, make sure you're doing this AFTER you've installed node as well as git.

- `cd ~/Desktop`
- `ng new angularinterface`

Answer a few questions:

- Routing is a way of creating special URLs for your application to control how it works. It's a more advanced feature that we won't be using in this course, so we'll say no.

- You can use the CLI with different css extension languages like sass here. We're just going to be working with CSS, so I'll hit return.

The Angular CLI is going to save you a lot of time when creating projects. In the next chapter, we'll take a peek into all of the stuff that Angular has created for you.
