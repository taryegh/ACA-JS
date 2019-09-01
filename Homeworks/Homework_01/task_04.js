"use strict";

// 4. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.

// Solving with math
function bringLastDig(n) {
  const lD = n % 10;
  const rest = Math.floor(n / 10);
  if (lD !== 0 && rest !== 0) {
    return +`${lD}${rest}`;
  }

  return n;
}

console.log(bringLastDig(736));
console.log(bringLastDig(1002));
console.log(bringLastDig(250));
console.log(bringLastDig(8));

// Solving with String
function bringLastDigS(n) {
  const nSt = n.toString();

  const lD = nSt.slice(nSt.length - 1);
  const rest = nSt.slice(0, nSt.length - 1);
  return +(lD + rest);
}

console.log(bringLastDigS(736));
console.log(bringLastDigS(1002));
console.log(bringLastDigS(250));
console.log(bringLastDigS(8));
