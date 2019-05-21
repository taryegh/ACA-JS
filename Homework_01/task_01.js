'use strict'


// 1. Given a number. Print “odd” if the number is odd and “even” if it’s even.

function checkOddEven(number) {
  if (number % 2 === 0) {
    return 'The number is even';
  }
  return 'The number is odd';
}

console.log(checkOddEven(123));
console.log(checkOddEven(35));
console.log(checkOddEven(70));


// Solving with ternary operator

function checkOddEvenTer(n) {
  return n % 2 === 0 ? 'even' : 'odd';
}

console.log(checkOddEvenTer(123));
console.log(checkOddEvenTer(35));
console.log(checkOddEvenTer(70));
