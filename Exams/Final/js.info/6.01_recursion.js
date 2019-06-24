'use strict';


// 1. Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

/* For instance:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Make 3 solution variants:

Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula. */

function sumToL(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  
  return sum;
}
console.log(sumToL(10));



function sumToR(n) {
  if (n === 0) {
    return n;
  }
  return n + sumToR(n - 1);
}
console.log(sumToR(10));



function sumToP(n) {
  let eq = (0 + n) / 2 * (n+1);  
  return eq;
}
console.log(sumToP(10));







// 2. The task is to write a function factorial(n) that calculates n! using recursive calls.

function fact(n) {
  if (n === 1) {
    return n;
  }
  return n * fact(n - 1);
}
console.log(fact(3));




// 3. Write a function fib(n) that returns the n-th Fibonacci number.

function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 2) + fib(n - 1);
}
console.log(fib(3));