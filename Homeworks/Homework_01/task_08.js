"use strict";

// 8. Input three numbers a, b, c respectively, where a is a non zero number and write a program to solve quadratic equations: ax^2 + bx + c = 0 . (Hint: use Math.pow or Math.sqrt).

function calcQuad(a, b, c) {
  if (a === 0) return "Enter valid constants.";

  const D = Math.pow(b, 2) - 4 * a * c;
  if (D >= 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    if (x1 !== x2) {
      return `Solutions are ${x1} and ${x2}.`;
    } else {
      return `Solution is ${x1}.`;
    }
  }

  return "Solution does not exist.";
}

console.log(calcQuad(1, 2, 1));
console.log(calcQuad(0, 4, -5));
console.log(calcQuad(3, -8, 12));
console.log(calcQuad(5, -13, 6));