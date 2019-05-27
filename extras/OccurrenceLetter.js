'use strict';


// 13. Write a JavaScript function to  get the number of occurrences of each letter in specified string.

function findRep(str) {
  let res = '';
  const sSt = str.split('').sort().join('');
  let counter = 1;

  for (let i = 0; i < sSt.length; i++) {
    if (sSt[i] === sSt[i + 1]) {
      counter++;
    } else {
      res += `${sSt[i]}: ${counter} \n`;
      counter = 1;
    }
  }

  return res;
}

console.log(findRep('hello world'));
