'use strict';

// 8.	Given an array. Create the array which elements are products between two neighbors.
function mulNeigh(arr) {
  const prodArr = [];

  for (let i = 1; i < arr.length; i++) {
    const prod = arr[i-1] * arr[i];
    prodArr.push(prod);
  }

  return prodArr;
}

console.log(mulNeigh([3, 7, 12, 5, 20, 0]));
console.log(mulNeigh([1, 1, 4, 32, 6]));
