'use strict';


// 6.	Given an array of numbers. Find the maximum element in array.
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([1, 10, 2, 2, 3]));
console.log(findMax([1, 4, 43, -112]));
