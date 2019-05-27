'use strict';


// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function convertUp(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === ' ') {
      res += str[i].toUpperCase();
      continue;
    }
    res += str[i];
  }

  return res;
}
console.log(convertUp('the quick brown fox'));
