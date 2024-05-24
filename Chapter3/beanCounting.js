// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.

function countChars(s, ch) {
    let count= 0;
    for(let i=0; i<s.length; i++) {
        if(s[i] == ch) {
            count++;
        } 
    }
    return count;
}

function countBs(s) {
    return countChars(s,"B");
}

console.log(countBs("SONY_BBC"));
console.log(countChars("amananand", "a"));