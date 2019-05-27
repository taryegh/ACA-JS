'use strict';


// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    console.log(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

showPrimes(32);


// another solution - check if the num is prime
function testPrime(n) {
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(testPrime(37));
