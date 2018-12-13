# Customizing your installation

The default installation is almost never appropriate for a real project. You'll often want to be able to install additional libraries or frameworks.

# Adding npm modules

The package.json is where you can see the libraries that have already been added and you can tell that the CLI has been busy adding stuff here.

We're going to add three different libraries for our project: Bootstrap, lodash and some icons from a library called Font Awesome.

- `npm i --save bootstrap`
- `npm i --save react-icons`
- `npm i --save lodash`
- `npm i --save jquery`
- `npm i --save popper.js`

```index.js
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
```

`> npm start`
