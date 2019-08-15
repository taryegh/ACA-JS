'use strict';


// 12.	Given an array of numbers. Print frequency of each unique number. (Frequency is the count of particular element divided by the count of all elements)

function findFreq2(arr) {
  const finArr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    const obj = {
      el: arr[i],
      freq: count / arr.length
    };
    finArr.push(obj);
  }
  return finArr;
}

console.log(findFreq2([1, 1, 2, 2, 3]));
