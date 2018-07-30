// even.js

function isEven(num) {
   return num % 2 === 0;
}

var tenIsEven = isEven(10);
var elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

// isEven takes as its parameter a number and returns a Boolean value representing...
//...whether or not the number is even.

// num can vary and therefore so will the result of num % 2 === 0. if num is even,...
// ...the result of num % 2 is 0 and so the whole expression evaluates to true.
// The opposite happens when num is odd.
