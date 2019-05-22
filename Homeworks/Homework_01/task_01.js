'use strict';


// 1. Given a number. Print “odd” if the number is odd and “even” if it’s even.

function checkOddEven(n) {
  if (n % 2 === 0) {
    return 'The number is even';
  }
  return 'The number is odd';
}

console.log(checkOddEven(123));
console.log(checkOddEven(35));
console.log(checkOddEven(70));


// Solving with ternary operator

function checkOddEvenT(n) {
  return n % 2 ? 'odd' : 'even';
}

console.log(checkOddEvenT(123));
console.log(checkOddEvenT(35));
console.log(checkOddEvenT(70));
