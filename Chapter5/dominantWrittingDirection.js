// Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

// The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.


function dominantDirection(text) {
    let ltrCount = 0;
    let rtlCount = 0; 
  
    for (let char of text) {
      // Check if the character's Unicode code point indicates it's RTL
      if (char.codePointAt(0) >= 0x0590 && char.codePointAt(0) <= 0x08FF) {
        rtlCount++;
      } else { // If not RTL, consider it LTR
        ltrCount++;
      }
    }
  
    if (ltrCount > rtlCount) {
      return 'ltr';
    } else if (rtlCount > ltrCount) {
      return 'rtl';
    } else {
      return 'no dominant direction found';
    }
  }
  
  console.log(dominantDirection("Hello!")); 
  console.log(dominantDirection("Hey, مساء الخير")); 
  console.log(dominantDirection("")); 
  console.log(dominantDirection("Heyخير")); 
  