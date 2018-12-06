Most interfaces rely on some type of data. We'll have these stored in a file, so to get that file, I'm going to go to this [Gist](https://gist.github.com/planetoftheweb/d9756dad7378dd3ea1265a273f288f12).

In Javascript, you'd execute an AJAX request or use the Fetch API to get that data into your app. The equivalent in Angular is called Observables. That's a ES7 feature that allows the application to keep track of (or observe) a file and then handle when happens when it changes.

To get that into our application we're going to need to import a new module called `httpClientModule`. We'll do that in `app.module.ts`. We also need to update imports in the decorator to make sure this is included in our application.

We want this data to be managed in our main component, so we'll need to add it there. But to do that we need to talk about the different parts of our module.

The app.component was automtically generated for us and it's actually a bit cleaned up, I want to show you one of the components we added in our previous video. Let's look at the list component.

We can see that it looks pretty similar to our main component with some important distinctions. First, in addition to importing the Component module, we're also importing something called OnInit. This is what's called a lifecycle hook.

It let's us do something in the application at a certain point in the life of the module. In this case, after the variables in the module have been created.

You can see that our modules import onInit and when the component exports, we implement this functionality into the module.

You can also see another important method called the constructor. The constructor initializes the module itself, so this is where you add the variables you want to use in your modules. The constructor builds the module first, so ngOnInit is a method that happens after the variables have been created.

`constructor(private http: HttpClient) {}`

ngOnInit(): void {
this.http.get('../assets/data.json').subscribe(data => {
console.log(data);
});
}
