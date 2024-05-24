// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as argument and produce a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as argument by reversing its elements. Neither may use the standard reverse method.

function reverseArray(arr) {
    let res= [];
    for(let i=arr.length-1; i>=0; i--) {
        res.push(arr[i]);
    }
    return res;
}

function reverseArrayInPlace(arr) {
    for(let i=0; i<Math.floor(arr.length/2); i++) {
        let elem= arr[i];
        arr[i]= arr[arr.length-1-i];
        arr[arr.length-1-i]= elem;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4]));
console.log(reverseArrayInPlace([1,2,3,4]));