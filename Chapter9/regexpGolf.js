// Code golf is a term used for the game of trying to express a particular program in as few characters as possible. Similarly, regexp golf is the practice of writing as tiny a regular expression as possible to match a given pattern and only that pattern.

// For each of the following items, write a regular expression to test whether the given pattern occurs in a string. The regular expression should match only strings containing the pattern. When your expression works, see whether you can make it any smaller.

// car and cat

// pop and prop

// ferret, ferry, and ferrari

// Any word ending in ious

// A whitespace character followed by a period, comma, colon, or semicolon

// A word longer than six letters

// A word without the letter e (or E)

// Refer to the table in the chapter summary for help. Test each solution with a few test strings.

// Fill in the regular expressions

// // ca should be there and next char should be r or t
// verify(/ca[rt]/,
//        ["my car", "bad cats"],
//        ["camper", "high art"]);

// // pr should be there r is optional after that op should be there
// verify(/pr?op/,
//        ["pop culture", "mad props"],
//        ["plop", "prrrop"]);

// // ferr should be there after that any one of the strings inside () should be there
// verify(/ferr(et|y|ari)/,
//        ["ferret", "ferry", "ferrari"],
//        ["ferrum", "transfer A"]);

// // ious should be there after that any one of the exp should be present
// verify(/ious($|P{L})/u,
//        ["how delicious", "spacious room"],
//        ["ruinous", "consciousness"]);

// // \s matches any whitespace character after that . ot , ot ; should follow
// verify(/\s[.,:;]/,
//        ["bad punctuation ."],
//        ["escape the period"]);

// // must have a sequence of 7 consecutive letters
// verify(/\p{L}{7}/u,
//        ["Siebentausenddreihundertzweiundzwanzig"],
//        ["no", "three small words"]);

// // begainning should not be a unicode letter
// // should not be a unicode letter nor e
// // eighter the end of the string or any character that is not a unicode letter 
// verify(/([^\p{L}]|^)[^\p{L}e]+([^\p{L}]|$)/ui,
//        ["red platypus", "wobbling nest"],
//        ["earth bed", "bedrøvet abe", "BEET"]);


// function verify(regexp, yes, no) {
//   // Ignore unfinished exercises
//   if (regexp.source == "...") return;
//   for (let str of yes) if (!regexp.test(str)) {
//     console.log(`Failure to match '${str}'`);
//   }
//   for (let str of no) if (regexp.test(str)) {
//     console.log(`Unexpected match for '${str}'`);
//   }
// } 

function verify(regexp, yes, no) {
       // Ignore unfinished exercises
       if (regexp.source == "...") return;
       for (let str of yes) if (!regexp.test(str)) {
         console.log(`Failure to match '${str}'`);
       }
       for (let str of no) if (regexp.test(str)) {
         console.log(`Unexpected match for '${str}'`);
       }
     }
     
     // Run the tests
     verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);
     verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);
     verify(/ferr(et|y|ari)/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);
     verify(/ious\b/, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);
     verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]);
     verify(/\b\w{7,}\b/, ["Siebentausenddreihundertzweiundzwanzig"], ["no", "three small words"]);
     verify(/\b[^\WeE]+\b/u,
       ["red platypus", "wobbling nest"],
       ["earth bed", "bedrøvet abe", "BEET"]);
