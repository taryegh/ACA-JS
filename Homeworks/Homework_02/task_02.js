"use strict";

// 2. Given a number n ( n>= 0 ). Print nth Fibonacci number. (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)

// Solving with recursion
function fib(n) {
  if (n <= 1) return n;

  return fib(n - 2) + fib(n - 1);
}

console.log(fib(0));
console.log(fib(2));
console.log(fib(10));
console.log(fib(20));

// Solving with for
function fibN(n) {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    const el = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(el);
  }
  return arr[arr.length - 1];
}

console.log(fibN(0));
console.log(fibN(2));
console.log(fibN(10));
console.log(fibN(20));