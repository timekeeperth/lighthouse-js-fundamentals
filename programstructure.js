CONDITIONAL EXECUTION

We've seen how to manipulate and structure various values, but to write truly useful
programs we'll need to instruct them to make decisions based on varying values.

CONTROL Follow

When your programs contains more than one statement, the statements are executed as if they
are a story, from top to bottom.

This program has two statements. The first one asks the user for a number, and the second,
which is executed after the first, shows the square of that number.

let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +
             theNumber * theNumber);

The function Number converts a value to a number. We need that conversion because the result of prompt
is a string value, and we want a number. There are similar functions called String and Boolean that convert
values to the types.

Here is a rather trivial schematic representation of straight-line control flow:

Not all programs are straight roads. We may, for example, want to create a branching road,
where the program takes the proper branch based on the situation at hand. This is called conditional execution.

Conditional execution is created with the if keyword in JavaScript. In the simple case, we want some code to be
executed if, and only if, a certain condition holds. We might, for example, want to show the square of the input
only if the input is actually a number.

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNan(theNumber)) {
   console.log("Your number is the square root of " +
               theNumber * theNumber);
}

The Number.isNan function is a standard JavaScript function that returns true only if the argument
it is given is NaN. The Number function happens to return NaN when you give it a string that doesn't
represent a valid number. Thus, the condition translates to "unless theNumber is not-a-number, do this".

The statement after the if is wrapped in braces in this example. The braces can be used to group any
number of statements into a single statement, called a block. You caould also have omitted them in this
case, since they hold only a single statement, but to avoid having to think about whether they are needed,
most JavaScript programmers use them in every wrapped statement like this.
We will mostly follow that convention, except for the occassional one-liner.

if (1 + 1 == 2) console.log("It's true");
// - > It's true

You often won't just have code that executes when a condition holds true, but also code that handles the other case.
The alternate path is represented by the second arrow in the diagram. Another branch.

You can use the 'else' keyword, together with 'if', to create two seperate, alternative execution paths.

NOTE. Prompt is a pop up box. A prompt box is often used if you want the user to input a value before entering a
page.

When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an
input value.

If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.


let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(the Number)) {
  console.log("Your number is the square root of " +
             theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?")
}

If you have more than two paths to choose from, you can "chain" multiple if/else pairs together:

let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

-- very similar to Ruby.

The programs will first check whether num is less than 10. If it is, it chooses that branch, shows "Small"
and is done.

If it isn't, it takes the else branch, which itself contains a second if. If the second condition (< 100) holds,
that means the number is between 10 and 100, and "Medium" is shown. If it doesn't, the second and last else branch
is chosen.

The schema for the program is written in your black notebook.


WHILE AND DO LOOPS

Consider a program that outputs all even numbers from 0 to 12. One way to write this is as follows:

console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

It works, but the idea of writing a program is to make something LESS work, not more.

If we needed all even numbers less than 1000 this approach would be unworkable.
What we need is a way to run a piece of code multiple times.

This form of control flow is called a loop.

Looping control flow allows us to go back to some point in the program where we were before
and repeat it with out current program state. If we combine this with a binding that counts,
we can do something like this:

let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// -> 0
// -> 2
//   ... etcetera

What you are doing here is incrementing it by two and printing that number while number <= 12.

A statement starting with the keyword 'while' creates a loop. The word 'while' is followed by an
expression in parentheses and then a statement, much like 'if'.

The loop keeps entering that statement as long as the expression produces a value that gives 'true'
when converted to Boolean.

// The 'number' binding demonstrates the way a binding can track the progress of a program. Every time the loop
repeats, 'number' gets a value that is 2 more than its previous value.

// At the beginning of every repetition,
// it is compared with the number 12 to decide whether the program's work is finished.

// An example that actually does something useful: we can now write a prgram that calculates and shows the value of
2^10 . We use two bindings: one to keep track of our result and one to count how often we have multiplied this
result by 2. The loop tests whether the second binding has reached 10 yet, and if not, updates the bindings.

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// -> 1024

The counter could also have started at 1 and checked for <= 10, but for reasons that will become apparent later (chapter 4)
, it is a good idea to get used to counting from 0.

A 'do' loop is a control structure similar to a 'while' loop. It differs only on one point:
a 'do' loop always executes its body at least once, and it starts testing whether it should stop
stop only after that first execution. To reflect this, the test appears after the body of the loop.

To reflect this, the rest appears after the body of the loop.

let YourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName)

This program will force you to enter a name. It will ask again and again until it gets something that is not
an empty string. Applying the ! operator will convert a value to a Boolean type before negating it, and all strings
except ""

// INDENTING CODE

// In the examples, spaces are added in front of statements that are part of some larger statement.
These spaces are not required - the computer will accept the program just fine without them.
In face, even the line breaks in programs are optional. You could write a program as a single long line
if you felt like it.

The role of this indentation inside blocks is to make the structure of the code stand out.
In code where new blocks are opened inside other blocks, it can become hard to see where one block
ends and another begins.

With proper indentation, the visual shape of a program corresponds to the shape of the blocks inside it.

// A good idea is to use two spaces for every open block, but tastes differ -- some people use four spaces, and
some people use tav characters. The important thing is that each new block adds the same amount of space.

if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}

Most code editor programs will help by automatically indenting new lines the proper amount.

FOR LOOPS

Many loops follow the pattern shown in the 'while' examples. First a "counter"
binding is created to track the progress of the loop. Then comes a 'while' loop,
usually with a test expression that checks whether the counter has reached its end value.

Because this pattern is so common, JavaScript and similar languages provide a slightly shorter and more comprehensive
form, the 'for' loop.

for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// -> 0
// -> 2
// ... etcetera

This program is exactly equivalent to the earlier even-number-printing example:

console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

The only change is that all the statements that are related to the "state" of the loop are grouped together after 'for'.

The parentheses after a 'for' keyword MUST contain two semicolons. The part before the first semicolon initializes the loop,
usually by defining a binding. The second part is the expression that checks whether the loop must continue.
The final part updates the state of the loop after every iteration. In most cases, this is shorter and clearer than a 'while'
construct.

This is the code that computes 2**10 using 'for' instead of 'while':

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}

This is was the while:

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// -> 1024


BREAKGING OUT OF A LOOP

Having the looping condition produce flase is not the only way a loop can finish.
There is a special statement called 'break' that has the effect of imediately jumping out of the enclosing loop.

This program illustrates the 'break' statement. It finds the first number that is
both greater than or equal to 20 and divisible by 7.

for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// -> 21

Using the remainder (%) operator is an easy way to test whether a number is divisble
by another number. If it is, the remainder of their division is zero.

The 'for' construct in the example does not have a part that checks for the end of the loop.
This means that the loop will never stop unless the 'break' statement inside is executed.

If you were to remove that 'break' statement or you accidentally write an end condition
that always produces 'true', your program would get stuck in an 'infinite loop'.

UPDATING BINDINGS SUCCINCTLY

// Especially when looping, a program often needs to "update" a binding to hold a value
// based on that binding's previous value.

counter = counter + 1;

JavaScript provides a shortcut for this.

counter += 1;

Similar shortcuts work for many other operators, such as result *= 2 to double 'result'
or counter -= 1 to count downward.

This allows us to shorten our counting example a little more.

for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}

For counter += 1 and counter -= 1, there are even shorter equivalents:

counter++ and counter--

DISPATCHING ON A VALUE WITH SWITCH

It is not uncommon for code to look like this:

if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();

There is a construct called 'switch' that intended to express such a 'dispath'
in a more direct way. Unfortunately the syntax JavaScript uses for this (which it
inherited from the C/Java line of programming languages) is somewhat awkward-a chain
of 'if' statements may look better. Here is an example:

switch (prompt("What is the weather like?")) {
case "rainy":
  console.log("Remember to bring an umbrella.");
  break;
case "sunny":
  console.log("Dress lightly.");
case "cloudy":
  console.log("Go outside.");
  break;
default:
  console.log("Unknown weather type!");
  break;
}

You may put any number of 'case' labels inside the block opened by switch.

The program will start executing at the label that corresponds to the value that
switch was givem, or at 'default' if no matching value is found. It will continue
executing, even across other labels, until it reaches a 'break' statement.

CAPITALIZATION

Binding names may not contain spaces, yet it is often helpful to use multiple words
to clearly describe what the binding represents. These are pretty much your choices
for writing a binding name with several words in it:

fuzzylittleturtle
fuzzy_little_turtle
FuzzyLittleTurtle
fuzzyLittleTurtle

The standard JavaScript functions, and most JavaScript programmers, follow the bottom style - they
capitalize every word except the first. It is not hard to get used to little things like that,
we follow this convention.

COMMENTS

A // comment goes only to the end of the line.

A section of text between /* and */ will be ignored in its entirety, regardless of whether it contains
line breaks. This is udeful for adding blocks of information about a file or a chunck of program.

/*
  Torreira, is often labelled as 'DM'. I find that to be true.
*/
const Torreira = 'DM'

SUMMARY

You may know that a program is built out of statements, which themselves
sometimes contain more statements. Statements tend to contain expressions,
which themselves can be built out of smaller expressions.

Putting statements after one another gives you a program that is executed from top
from bottom. You can introduce disturbances in the flow of control by using
conditional (if, else, and switch) and lopping (while, do, and for) statements.

Bindings can be used to file pieces of date under a name, and they are useful for tracking state
in your program. The environment is the set of bindings that are defined.
JavaScript systems always put a number of useful standard bindings into your environment.

Functions are special values that encapsulate a piece of program. You can invoke them by writing
functionName(argument1, argument2). Such a function call is an expression and may produce a value.
