/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window/Global Object Binding
*    When 'this' is in the global scope, it selects the entire window object - nothing specific(undefined).

* 2. Implicit Binding
     When an object method is invoked, 'this' is the what is mentioned before the dot.

* 3. New binding
*    When utilizing a constructor function to create a new object with 'new' keyword - 'this' refers to the      new object being constructed.

* 4. Explicit binding
     The first argument passed in a .call() / .apply() / .bind() property. In a call property, subsequent arguments will be passed to the function. In the apply property, an array of arguments can be passed. In the bind property, returns new function instead of invoking original function.
*
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
let listNames = function () {
  console.log(this.names);
};

let family = {
  names: 'Katrina, Justin, Jax'
};

listNames();

// Principle 2
// code example for Implicit Binding
let weather = {
  day: 'Sunday',
  temp: 70,
  tellWeather: function(){
    console.log(`Today is ${this.day} and it is ${this.temp} degrees.`);
  }
};
weather.tellWeather();

// Principle 3
// code example for New Binding
let Pizza = function(size, crust, topping){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
};

let pepperoniPizza = new Pizza('Large', "Stuffed Crust", "Pepperoni");

console.log(`I'd like a ${pepperoniPizza.size} ${pepperoniPizza.crust} ${pepperoniPizza.topping} Pizza please.`);

// Principle 4
// code example for Explicit Binding
let familyGreeting = function(){
  console.log(`Greetings from the ${this.last_name} family.`)
}

let familyObj = {
  last_name: 'Daigle',
  mom: 'Katrina',
  dad: 'Justin',
  baby: 'Jax'
};

familyGreeting.call(familyObj);