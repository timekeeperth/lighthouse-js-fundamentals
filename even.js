// even.js

//function isEven(num) {
   //return num % 2 === 0;
//}

//var tenIsEven = isEven(10);
//var elevenIsEven = isEven(11);

//console.log(tenIsEven);
//console.log(elevenIsEven);

// isEven takes as its parameter a number and returns a Boolean value representing...
//...whether or not the number is even.

// num can vary and therefore so will the result of num % 2 === 0. if num is even,...
// ...the result of num % 2 is 0 and so the whole expression evaluates to true.
// The opposite happens when num is odd.

// We can simplify our code a little by learning that we don't need to set our function...
//...return values to new variables before doing something with them - we can use them directly
//...where we need them.

function isEven(num) {
  return num % 2 === 0
}

console.log(isEven(10));
console.log(isEven(11));

// console.log is itself a function -- only it's pre-defined by JavaScript and we can use it without...
//...having to declare it ourselves.
// We can pass the result returned by isEven directly to console.log, which takes the value and outputs it to terminal.

// Below we have pasted from odd.js :

var total = 0

var limit = 10

function isOdd(num) {
  return num % 2 === 1
}

console.log(isOdd(10));
