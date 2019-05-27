'use strict';


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function getMatrix(n) {
  let res = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === j) {
        res += 1;
      } else {
        res += '0';
      }
    }
    res += '\n';
  }

  return res;
}

console.log(getMatrix(5));
