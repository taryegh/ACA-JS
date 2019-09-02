"use strict";

// 9.	Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers by the given num length over the specified interval (from a to b).

function spaceEvenly(a, b, num) {
  if (a > b) return "a should be smaller than b";

  const arr = [];
  const space = (b - a) / (num - 1);

  for (let i = a; i <= b; i += space) {
    arr.push(i);
  }

  return arr;
}

console.log(spaceEvenly(1, 5, 1));
console.log(spaceEvenly(10, 100, 3));
console.log(spaceEvenly(1, 5, 6));