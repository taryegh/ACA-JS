"use strict";

// 11. Enter a number. Reverse its first and last digits. Print the new number.

function reverseDigs(n) {
  if (n / 10 < 1) {
    return n;
  }

  const nSt = n.toString();
  const fE = nSt.slice(0, 1);
  const lE = nSt.slice(nSt.length - 1);
  const mid = nSt.slice(1, nSt.length - 1);

  return +(lE + mid + fE);
}

console.log(reverseDigs(2));
console.log(reverseDigs(13));
console.log(reverseDigs(7131135));
