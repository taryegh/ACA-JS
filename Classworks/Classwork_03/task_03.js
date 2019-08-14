'use strict';

// 3.	Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements starting from a to b spaced by step.

function createSpace(a, b, step) {
  const stepCount = b / step;
  const arr = [a];
  for (let i = 1; i < stepCount; i++) {
    arr.push(arr[arr.length - 1] + step);
  }
  return arr;
}

console.log(createSpace(1, 5, 1));
console.log(createSpace(10, 100, 20));
console.log(createSpace(1, 5, 0.5));
