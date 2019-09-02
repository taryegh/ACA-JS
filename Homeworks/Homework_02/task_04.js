"use strict";

// 4. Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum, print the quotient, otherwise print the remainder.

function solveDig() {
  const n = prompt("Enter number");
  let sum = 0;
  let prod = 1;

  for (let i = 0; i < n.length; i++) {
    sum +=n[i];
    prod *= n[i];
  }
  if (prod % sum === 0) {
    return `Quotient is ${prod / sum}`;
  } else {
    return `Reminder is ${prod % sum}`;
  }
}

console.log(solveDig());