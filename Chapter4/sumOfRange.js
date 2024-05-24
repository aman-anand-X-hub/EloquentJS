// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.

function range(start, end) {
    let sum= 0;
    if(start <= end) {
        for(let i=start; i<=end; i++) {
            sum+= i;
        }
    }
    else {
        for(let i=end; i<=start; i++) {
            sum+= i;
        }
    }

    return sum;
}

console.log(range(2,5));
console.log(range(5,2));


// As a BONUS assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function rangeBonus(start, end, step = start <= end ? 1 : -1) {

    let sum= 0;
    if(step > 0) {
        for(let i=start; i<=end; i++) {
            sum+= i;
        }   
    }
    else {
        for(let i=end; i<=start; i++) {
            sum+= i;
        }
    }

    return sum;
}

console.log(rangeBonus(2,5));
console.log(rangeBonus(5,2));