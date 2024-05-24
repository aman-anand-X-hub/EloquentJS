// Write a higher-order function loop that provides something like a for loop statement. It should take a value, a test function, an update function, and a body function. Each iteration, it should first run the test function on the current loop value and stop if that returns false. It should then call the body function, giving it the current value, and finally call the update function to create a new value and start over from the beginning.
// When defining the function, you can use a regular loop to do the actual looping.

function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
  }

loop(3, n => n > 0, n => n - 1, console.log);

// start: The initial value to start the loop with.
// test: A function that takes the current loop value and returns true or false. If it returns false, the loop stops.
// update: A function that takes the current loop value and returns a new value to use in the next iteration.