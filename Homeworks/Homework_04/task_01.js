'use strict';


// 1. Write a function which receives an array and a number as arguments and returns a new array from the elements of the given array which are larger than the given number.

function getLarge(arr, n) {
  const fArr = arr.filter(el => el > n);
  return fArr.length ? fArr : 'Such values do not exist';
}

console.log(getLarge([10, 25, 16, -5, 30, 15, 24], 16));
console.log(getLarge([1, 1, 2, -3, 0, 8, 4, 0], 9));


// another solution

function getLSub(arr, n) {
  const largeNs = [];

  arr.forEach((el) => {
    if (el > n) largeNs.push(el);
  });

  return largeNs.length > 0 ? largeNs : 'Such values do not exist';
}

console.log(getLSub([10, 25, 16, -5, 30, 15, 24], 16));
console.log(getLSub([1, 1, 2, -3, 0, 8, 4, 0], 9));
