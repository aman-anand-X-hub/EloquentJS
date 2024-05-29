// Module A
const B = require('./B');

module.exports = {
  AFunction: function() {
    console.log("Function in Module A");
    B.BFunction();
  }
};

// Module B
const A = require('./A');

module.exports = {
  BFunction: function() {
    console.log("Function in Module B");
    A.AFunction();
  }
};

// Main program
const A = require('./A');
A.AFunction(); // This will work without causing a stack overflow


// In this example, both modules A and B depend on each other, but since their interface objects are cached during loading, the cyclic dependency is handled properly, and the main program can execute without issues.
