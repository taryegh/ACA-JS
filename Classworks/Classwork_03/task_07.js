'use strict';


// 7.	Given an array of strings. Print the concatenation of all elements.
function concat(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  return str;
}

console.log(concat(["hello", " ", "world"]));
console.log(concat(["a", "c", "a"]));
