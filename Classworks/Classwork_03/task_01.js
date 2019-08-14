"use strict";

//1.	Given an array․ Compute the length of the array. (without using .length)

function calcLength(arr) {
  let len = 0;
  while (arr[len] !== undefined) {
    len++;
  }
  return len;
}
console.log(calcLength([1, 12, 4]));
console.log(calcLength([-1, 0, 1, 2]));
console.log(calcLength([]));
console.log(calcLength([-1, 0.4]));
