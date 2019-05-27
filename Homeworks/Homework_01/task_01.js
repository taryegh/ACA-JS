'use strict';


// 1. Given a number. Print “odd” if the number is odd and “even” if it’s even.

function isEven(n) {
  if (n % 2 === 0) {
    return 'even';
  }
  return 'odd';
}

console.log(isEven(123));
console.log(isEven(35));
console.log(isEven(70));


// Solving with ternary operator

function isEvenT(n) {
  return n % 2 ? 'odd' : 'even';
}

console.log(isEvenT(123));
console.log(isEvenT(35));
console.log(isEvenT(70));
