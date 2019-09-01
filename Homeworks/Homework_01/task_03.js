"use strict";

// 3. Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).

// Solving with Unary operator
function printNs(n) {
  return +`${n}` + +`${n}${n}` + +`${n}${n}${n}`;
}

console.log(printNs(3));
console.log(printNs(17));
console.log(printNs(100));

// Solving with parseInt
function printNsP(n) {
  return parseInt("" + n) + parseInt("" + n + n) + parseInt("" + n + n + n);
}
console.log(printNsP(3));
console.log(printNsP(17));
console.log(printNsP(100));