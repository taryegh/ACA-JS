'use strict';


// 10. Insert a digit and a number. Check whether the digit contains in the number or not.

function checkDigNum(dig, n) {
  const stN = n.toString();
  const stD = dig.toString();

  for (let i = 0; i < stN.length; i++) {
    if (stD === stN[i]) {
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
  const stN = n.toString();
  const stD = dig.toString();

  return stN.match(stD) ? 'Yes' : 'No';
}

console.log(checkDigNum2(5, 2463));
console.log(checkDigNum2(4, 6));
console.log(checkDigNum2(8, 45689));


// Another method - recursion

function checkDig(dig, n) {
  const lE = n % 10;

  if (dig === lE) {
    return 'Yes';
  }
 
  if (n === 0) {
    return 'No';
  }

  return checkDig(dig, Math.floor(n / 10));
}

console.log(checkDig(5, 2463));
console.log(checkDig(4, 6));
console.log(checkDig(8, 45689));
