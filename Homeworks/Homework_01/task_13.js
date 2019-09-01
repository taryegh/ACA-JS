"use strict";

// 13. (***) Enter a number. Find the difference between its biggest and smallest digits.

function calcDifference() {
  const n = prompt("Enter number");
  const nArr = n.split("");
  return Math.max(...nArr) - Math.min(...nArr);
}

console.log(calcDifference());

function calcDif() {
  const n = prompt("Enter number");

  let biggest = -Infinity;
  let smallest = +Infinity;

  for (let i = 0; i < n.length; i++) {
    if (n[i] > biggest) {
      biggest = n[i];
    }
    if (n[i] < smallest) {
      smallest = n[i];
    }
  }

  return biggest - smallest;
}

console.log(calcDif());
