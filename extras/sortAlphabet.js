'use strict';


// Write a JavaScript function that returns a passed string with letters in alphabetical order.

function alp(s) {
  return s.split('').sort().join('');
}

console.log(alp('hello'));
