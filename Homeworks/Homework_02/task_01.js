"use strict";

// 1. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

function isPrime() {
  const n = +prompt("Enter number");
  let string = "prime";

  if (n <= 0) return "not prime";
  if (n === 1) return "not prime";

  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) string = "not prime";
  }

  return string;
}

console.log(isPrime());
