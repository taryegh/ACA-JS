'use strict';


// 2. Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even. The numbers obtained should be printed in a comma-separated sequence on a single line.

function getEvens(s, e) {
  let res = '';

  for (let i = s; i <= e; i++) {
    res += `${i}, `;
  }

  return res;
}

console.log(getEvens(10, 30));
