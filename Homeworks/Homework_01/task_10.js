'use strict';


// 10. Insert a digit and a number. Check whether the digit contains in the number or not.

function checkDigNum(dig, n) {
  const nSt = n.toString();
  const dSt = dig.toString();

  for (let i = 0; i < nSt.length; i++) {
    if (nSt[i] === dSt) {
      return 'Yes';
    }
  }

  return 'No';
}

console.log(checkDigNum(5, 2463));
console.log(checkDigNum(4, 6));
console.log(checkDigNum(8, 45689));


// Another method

function checkDigNum2(dig, n) {
  const nSt = n.toString();
  const dSt = dig.toString();

  return nSt.match(dSt) ? 'Yes' : 'No';
}

console.log(checkDigNum2(5, 2463));
console.log(checkDigNum2(4, 6));
console.log(checkDigNum2(8, 45689));


// Another method - recursion

function checkDig(dig, n) {
  const lE = n % 10;

  if (lE === dig) {
    return 'Yes';
  }

  if (n === 0) {
    return 'No';
  }

  return checkDig(dig, Math.floor(n / 10));
}

console.log(checkDig(0, 0));
console.log(checkDig(5, 2463));
console.log(checkDig(4, 6));
console.log(checkDig(8, 45689));
