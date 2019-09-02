"use strict";

// 2. Given an array of numbers. Print frequency of each unique number. (Frequency is the count of particular element divided by the count of all elements)

function getFreq(arr) {
  const finArr = [];
  const sortedArr = [...arr].sort((a, b) => a - b);
  let count = 1;

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      count += 1;
    } else {
      const obj = {
        number: sortedArr[i],
        frequency: +(count / sortedArr.length).toFixed(2)
      };
      finArr.push(obj);
      count = 1;
    }
  }
  return finArr;
}

console.log(getFreq([1, 1, 2, 2, 3]));
console.log(getFreq([4, 4]));
console.log(getFreq([1, 2, 3]));