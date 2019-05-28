'use strict';


// 3. Given a number n( n> 0 ). Print Fibonacci series up to n.

function fibS(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    let res = arr[i - 2] + arr[i - 1];

    if (res <= n) {
      arr.push(res);
    }
  }

  return arr;
}
console.log(fibS(7));
console.log(fibS(45));
