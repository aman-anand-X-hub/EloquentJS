// Define the function min that takes two arguments and returns their minimum.

function getMinimumOfTwo(a, b) {
    return Math.min(a, b);
}

console.log(getMinimumOfTwo(-1, 1));              
console.log(getMinimumOfTwo(-Infinity, Infinity)); 
console.log(getMinimumOfTwo(NaN, 100));            
console.log(getMinimumOfTwo(0, 0));               
