// Consider the following (rather contrived) object:

// const box = new class {
//   locked = true;
//   #content = [];

//   unlock() { this.locked = false; }
//   lock() { this.locked = true;  }
//   get content() {
//     if (this.locked) throw new Error("Locked!");
//     return this.#content;
//   }
// };
// It is a box with a lock. There is an array in the box, but you can get at it only when the box is unlocked.

// Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the function, and then ensures that the box is locked again before returning, regardless of whether the argument function returned normally or threw an exception.

"use strict";

const box = new class {
    locked = true;
    #content = [];
  
    unlock() { this.locked = false; }
    lock() { this.locked = true;  }
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this.#content;
    }
  };
  
  function withBoxUnlocked(body) {
    // Your code here
    let initiallyLocked = box.locked;
    if (initiallyLocked) box.unlock();
    
    try {
      return body();
    }
    catch (err) {
        throw err;
    } 
    finally {
      if (initiallyLocked) box.lock();
    }
  }
  
  // Add an item to the box content
  withBoxUnlocked(() => {
    box.content.push("gold piece");
  });
  
  // Handle an exception thrown inside the function
  try {
    withBoxUnlocked(() => {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised:", e);
  }
  
  // Check if the box is locked after all operations
  console.log(box.locked); 
  