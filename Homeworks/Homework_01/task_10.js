"use strict";

// 10. Insert a digit and a number. Check whether the digit contains in the number or not.

// Solving with for
function checkDig() {
  const d = prompt("insert digit");
  const n = prompt("insert number");

  for (let i = 0; i < n.length; i++) {
    if (d === n[i]) return true;
  }

  return false;
}

console.log(checkDig());

// Solving with Recursion
function checkDigR(dig, n) {
  const lE = n % 10;

  if (dig === lE) return true;
  if (n === 0) return false;

  return checkDigR(dig, Math.floor(n / 10));
}

console.log(checkDigR(1, 2));
console.log(checkDigR(2, 2));
