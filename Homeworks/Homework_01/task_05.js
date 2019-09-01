"use strict";

// 5. Given five numbers as input. Calculate and print the average of the numbers(without using arrays).

function calcAverage(...args) {
  const sum = args.reduce((sum, cur) => {
    return (sum += cur);
  }, 0);

  return sum / args.length;
}

console.log(calcAverage(45, -12, 0, 3, -15));
console.log(calcAverage(7, 52, -23, 9, -81));

// without arrays
function calcAverageN(a1, a2, a3, a4, a5) {
  return (a1 + a2 + a3 + a4 + a5) / 5;
}

console.log(calcAverageN(45, -12, 0, 3, -15));
console.log(calcAverageN(7, 52, -23, 9, -81));
