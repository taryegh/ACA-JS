'use strict';


// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longSub(str) {
  let arr = str.split(' ');
  let longest = '';
  let l = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > l) {
      l = arr[i].length;
      longest = arr[i];
    }
  }

  return longest;
}
console.log(longSub('Web Development Tutorial'));
