"use strict";

// 10. Given an array of numbers. Find the index of the second maximum element.

// Solving with sort
function findSecondMaxIndex(arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const el = sortedArr[sortedArr.length - 2];
  return arr.indexOf(el);
}

console.log(findSecondMaxIndex([23, -98, 0, -456, 12, 8]));
console.log(findSecondMaxIndex([-60, 2, 43, -18, 5, -19, 36, 7, 56]));

// Solving manually
function findSecondMaxIndexM(arr) {
  let biggest = -Infinity;
  let secBiggest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      secBiggest = biggest;
      biggest = arr[i];
    } else if (arr[i] < biggest && arr[i] > secBiggest) {
      secBiggest = arr[i];
    }
  }

  return arr.indexOf(secBiggest);
}

console.log(findSecondMaxIndexM([23, -98, 0, -456, 12, 8]));
console.log(findSecondMaxIndexM([-60, 2, 43, -18, 5, -19, 36, 7, 56]));
