'use strict';


// 5. Given an array of numbers which is almost sorted in ascending order. Find the index where sorting order is violated.

function findSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return arr.indexOf(i - 1);
  }
  return -1;
}

console.log(findSort([2, 12, 15, 48, 64]));
console.log(findSort([-9, -4, -4, 3, 12, 4, 5]));
