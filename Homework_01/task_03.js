'use strict';


// 3. Given number ​n​ (positive integer). Print the value of ​n + nn + nnn​(not multiplication)​.

function printNs(n) {
  return parseInt(`${n}`) + parseInt(`${n}${n}`) + parseInt(`${n}${n}${n}`);
}

console.log(printNs(3));
console.log(printNs(17));
console.log(printNs(100));


// parsing int with unary operator

function printNs2(n) {
  return +(`${n}`) + +(`${n}${n}`) + +(`${n}${n}${n}`);
}

console.log(printNs2(3));
console.log(printNs2(17));
console.log(printNs2(100));
