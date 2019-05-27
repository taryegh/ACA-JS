'use strict';


// 3. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.

function calcDig(n) {
  let sDigN = 0; // sum of digits of n
  let sResDigN = 0; // sum of digits of sDigN

  while (n >= 1) {
    const lDig = n % 10;
    sDigN += lDig;
    n = Math.floor(n / 10);
  }

  if (Math.floor(sDigN / 10)) {
    while (sDigN > 0) {
      sResDigN += sDigN % 10;
      sDigN = Math.floor(sDigN / 10);
    }

    return sResDigN;
  }

  return sDigN;
}

console.log(calcDig(14));
console.log(calcDig(29));
console.log(calcDig(999999999999));
