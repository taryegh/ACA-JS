'use strict';

// 2.	Given an array of numbers. Print the sum of the elements in array.
function calcSum(arr) {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}
console.log(calcSum([1, 12, 4]));
console.log(calcSum([-1, 0, 1, 2]));
console.log(calcSum([]));
console.log(calcSum([-1, 0.4]));
