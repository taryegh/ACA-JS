'use strict';


// 7. Write a function, which receives an array as an argument which elements arrays of numbers. Find biggest negative number of each array. Return product of that numbers. If there is not any negative number in an array, ignore that one. Check that items of the given array are arrays.

function mulBigNeg(arr) {
  let bool = true;
  const res = [];
  let prod = 1;

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i]) || !arr[i].length) {
      bool = false;
    }

    for (let j = 0; j < arr[i].length; j++) {
      arr[i].sort((a, b) => b - a);
      if (arr[i][j] < 0) {
        res.push(arr[i][j]);
        break;
      }
    }
  }

  if (bool) {
    if (res.length === 0) {
      return 'No negatives';
    }

    for (let j = 0; j < res.length; j++) {
      prod *= res[j];
    }

    return prod;
  }

  return 'Invalid Argument';
}

console.log(mulBigNeg([[2, -9, -3, 0], [1, 2], [-4, -11, 0]]));
console.log(mulBigNeg([[3, 4], [11, 0], [5, 6, 7, 8]]));
console.log(mulBigNeg([1, 2, 3]));
