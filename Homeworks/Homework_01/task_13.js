'use strict';


// 13. (***) Enter a number. Find the difference between its biggest and smallest digits.

function calcDif(n) {
  const nSt = n.toString();
  const nArr = nSt.split('');
  return Math.max(...nArr) - Math.min(...nArr);
}

console.log(calcDif(5));
console.log(calcDif(152));
console.log(calcDif(4593653));


// Another method
function calcDif2(n) {
  let num = n;
  const arr = [];

  while (num > 0) {
    const el = num % 10;
    arr.unshift(el);
    num = Math.floor(num / 10);
  }

  let biggest = -Infinity;
  let smallest = +Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return biggest - smallest;
}

console.log(calcDif2(5));
console.log(calcDif2(152));
console.log(calcDif2(4593653));
