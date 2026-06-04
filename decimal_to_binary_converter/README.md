# Decimal to Binary Converter

**Recursion** is a programming concept where a function calls itself. This can reduce a complex problem into simpler sub-problems, until they become straightforward to solve.

In this project, you’ll build a decimal-to-binary converter using JavaScript. You’ll learn the fundamental concepts of recursion, explore the call stack, and build out a visual representation of the recursion process through an animation.

**parseInt()** takes at least one argument, a string to be converted into an integer, and returns either an integer or **NaN** which stands for Not a Number.

The *call stack* is a collection of function calls stored in a stack structure. When you call a function, it is added to the top of the stack, and when it returns, it is removed from the top / end of the stack.

A recursive function is a function that calls itself over and over. But you have to be careful because you can easily create an infinite loop. That's where the *base case* comes in. The base case is when the function stops calling itself, and it is a good idea to write it first.

The **setTimeout** function takes two arguments: a callback function and a number representing the time in milliseconds to wait before executing the callback function.