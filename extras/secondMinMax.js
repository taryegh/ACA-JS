'use strict';


// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function getSLowGr(arr) {
  let res = '';
  let sArr = arr.sort();

  sArr.pop();
  sArr.shift();

  let min = Math.min(...sArr);
  let max = Math.max(...sArr);

  res += min;
  res += max;

  return res;
}

console.log(getLowGr([1, 2, 3, 4, 5]));
