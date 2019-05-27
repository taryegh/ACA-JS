'use strict';


// 1. Write a JavaScript function that reverse a number.

function reverse(n) {
  let res = '';

  while (n > 0) {
    const lE = n % 10;
    res += lE;

    n = Math.floor(n / 10);
  }

  return +res;
}

console.log(reverse(32243));


// another solution

function rev(n) {
  let nSt = n.toString();
  return +(nSt.split('').reverse().join(''));
}
console.log(rev(32243));
