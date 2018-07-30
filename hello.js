//function sayHello() {
//  console.log("Hello, world");
//}

//sayHello();

// Let's see how we can improve this:

function sayHello(name) {
  console.log("Hello, " + name);
}

// Now we've got a function taking a value as its input, which we've referred to as name...
// ...and which we concentate to the string "Hello, " before we output the whole result.
// The input to the function is called a parameter, in our case we've called it 'name.'
// You can think of a function's parameters as variables that are accessible and can only be used...
// ...within the function, and whose values vary and are set when we call the function.

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

// We've now called our sayHello function three times.
// We've created a bit of functionality that can greet anyone.
// This is a very powerful tool - instead of having to repeat our code for every time we want to greet a new person..
//...we can simply pass along their name to our sayHello function and the function takes care of the rest for us.

// sayHello is one of two main varieties of functions; one that produces a side effect, as in it does something.
// The other main type is a function that produces a result, as in it calculates and returns a value we can use in further code.
// One such function could be for determining whether a number is even. Let's do that next.
