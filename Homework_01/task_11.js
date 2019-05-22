'use strict';


// 11. Enter a number. Reverse its first and last digits. Print the new number.

function reverseDigs(n) {
  if (n / 10 < 1) {
    return n;
  }

  const stN = n.toString();
  const fEl = stN.slice(0, 1);
  const lEl = stN.slice(stN.length - 1);
  const mid = stN.slice(1, stN.length - 1);

  return +(lEl + mid + fEl);
}

console.log(reverseDigs(2));
console.log(reverseDigs(13));
console.log(reverseDigs(7131135));
