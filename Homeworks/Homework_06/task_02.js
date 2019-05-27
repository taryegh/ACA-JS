'use strict';


// 2. Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.

function findC(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return max - min;
}

console.log(findC([1, 2, 3, 5, 5, 9]));
