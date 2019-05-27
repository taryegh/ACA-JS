'use strict';


// 2. Given two numbers. Print 1 if one of them is divisible by the other one, otherwise print 0.

function isDiv(a, b) {
  if ((a % b === 0) || (b % a === 0)) {
    return 1;
  }
  return 0;
}

console.log(isDiv(3, 14));
console.log(isDiv(18, 2));
console.log(isDiv(7, 21));


// Solving with ternary operator

function isDivT(a, b) {
  return a % b === 0 || b % a === 0 ? 1 : 0;
}

console.log(isDivT(3, 14));
console.log(isDivT(18, 2));
console.log(isDivT(7, 21));
