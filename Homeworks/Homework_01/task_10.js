'use strict';


// 10. Insert a digit and a number. Check whether the digit contains in the number or not.

function checkDigNum() {
  const d = prompt('insert a digit');
  const n = prompt('insert a number');

  for (let i = 0; i < n.length; i++) {
    if (n[i] === d) {
      return 'Yes';
    }
  }

  return 'No';
}

console.log(checkDigNum());
console.log(checkDigNum());
console.log(checkDigNum());


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
