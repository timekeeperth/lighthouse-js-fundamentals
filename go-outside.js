// if (raining) {
//  console.log("Don't forget your umbrella!");
// }

// In our condition, raining is true, and therefore the console log will remind us
// to pack an umbrella. If raining were false, the code would do nothing.

//var raining = false;
//var cold = true;

//if (raining) {
//  console.log("Don't forget your umbrella!");
//}

//if (cold) {
//  console.log("Make sure you pick out a scarf!");
//}

//console.log("Now you're ready to go outside!");

// As we've seen, we can use if statements to execute code conditionally and we can
// add multiple different if statements in a row. But what if we wanted to do one thing in one case
// and another in all other cases? Modify your code then execute it.

var cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

// Now, because cold is false, the console.log within our if statement will not be executed -- but the code
//inside the else block will. If cold were true, the opposite would happen - that is, the program would tell us to
//choose a scarf to wear but it won't tell us short sleeves are OK.

// Yet doesn't that seem like a bit of a jump, going from short sleeves straight to a scarf?
// Let's see if we can do better.

var temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


// if statements become even more powerful when we understand how to use logical operators in
// conjuction with them. JavaScript's logical operators are && - logical AND, || - logical OR ! - logical NOT.

// We can use these to write more complex expressions. For example, if a variable isCitizen holds a Boolean value representing
// whether or not someone is a citizen, and age is that same person's age, we could write the following if statement:

if (isCitizen && age > 18) {
  console.log("you are eligible to vote.");
}

// Here we're checking both conditions, isCitizen and age > 18 are true for the if statement overall to
// evaluate to true. If any other of our two conditions are false, then the whole expression is false.

// Another example:

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...");

  Another:

if (!raining) {
  console.log("Leave your umbrella at home!");
}

// We read the expression in the above example usually as "if not raining", but it's not always intuitive
what "not true" or "not false" mean unless you remember the ! operator simply reverses the value of raining.
That is, if raining is true, !raining is false. If raining is false, !raining is true.
