'use strict';


// Write a JavaScript function which accepts an argument and returns the type.

function getType(arg) {
  return typeof(arg);
}

console.log(getType(5));
console.log(getType([]));
console.log(getType(function(){}));
