'use strict';


// 1. Write a program to print X star pattern series using loop.

function printX(n) {
  let res = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || j === n - i - 1) {
        res += '* ';
      } else {
        res += '  ';
      }
    }

    res += '\n';
  }

  return res;
}

console.log(printX(7));
