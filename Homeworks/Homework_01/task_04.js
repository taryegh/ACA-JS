"use strict";

// 4. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.

function bringLastDig(n) {
  if (n < 0 || n === undefined) return "Please enter positive number";

  const nSt = n.toString();

  if (nSt[nSt.length - 1] !== "0") {
    const lE = nSt.slice(nSt.length - 1);
    const rest = nSt.slice(0, nSt.length - 1);

    return +(lE + rest);
  }

  return n;
}

console.log(bringLastDig(736));
console.log(bringLastDig(1002));
console.log(bringLastDig(250));
console.log(bringLastDig(8));

// Other method

function lastDig(n) {
  if (n < 0 || n === undefined) return "Please enter a positive number";

  const lE = n % 10;
  const rest = Math.floor(n / 10);

  return lE !== 0 && rest !== 0 ? +(lE.toString() + rest.toString()) : n;
}

console.log(lastDig(367));
console.log(lastDig(1002));
console.log(lastDig(250));
console.log(lastDig(8));
