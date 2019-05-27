'use strict';


// 1. Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...)

function remFEl(arr) {
  if (arr.length <= 1) {
    arr.pop();
    return arr;
  }

  const lE = arr.pop();
  remFEl(arr).push(lE);

  return arr;
}

console.log(remFEl([6, 78, 'n', 0, 1]));
