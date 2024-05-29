// Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers and in the other 80 percent of cases raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.
// Make sure you handle only the exceptions you are trying to handle.

"use strict";

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {

  // Your code here.
  // running infifnite loop untill it returns a error which is 20% of the cases
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (err) {
      if (!(err instanceof MultiplicatorUnitFailure)) { // if any other error occurs throw the error
        throw err; 
      }
    }
  }
}

console.log(reliableMultiply(10, 10));