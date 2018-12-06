# Customizing your installation

The default installation is almost never appropriate for a real project. You'll often want to be able to install additional libraries or frameworks.

# Adding npm modules

The package.json is where you can see the libraries that have already been added and you can tell that the CLI has been busy adding stuff here.

We're going to add three different libraries for our project: Bootstrap, lodash and some icons from a library called Font Awesome.

- `npm install --save-dev bootstrap`
- `npm install --save-dev @fortawesome/fontawesome-svg-core`
  `npm install --save-dev @fortawesome/free-solid-svg-icons`
  `npm install --save-dev @fortawesome/angular-fontawesome`
- `npm install --save-dev jquery`
- `npm install --save-dev popper.js`
- `npm i --save lodash`

```angular.json
"styles": [ "node_modules/bootstrap/dist/css/bootstrap.css", "src/styles.css" ],
```

```angular.json
"scripts": [ "node_modules/jquery/dist/jquery.js",
"node_modules/popper.js/dist/umd/popper.js",
"node_modules/bootstrap/dist/js/bootstrap.js" ],
```

`> ng serve`
