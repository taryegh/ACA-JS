'use strict';


// 2. Given two numbers. Print 1 if one of them is divisible by the other one, otherwise print 0.

function checkIsDev(a, b) {
  if ((a % b === 0) || (b % a === 0)) {
    return 1;
  }
  return 0;
}

console.log(checkIsDev(3, 14));
console.log(checkIsDev(18, 2));
console.log(checkIsDev(7, 21));


// Solving with ternary operator

function checkIsDevT(a, b) {
  return a % b === 0 || b % a === 0 ? 1 : 0;
}

console.log(checkIsDevT(3, 14));
console.log(checkIsDevT(18, 2));
console.log(checkIsDevT(7, 21));
