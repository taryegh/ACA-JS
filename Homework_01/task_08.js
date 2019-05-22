'use strict';


// 8. Input three numbers ​a,​ ​b,​ ​c​ respectively, where a is a non zero number and write a program to solve quadratic equations: ax^2 + bx + c = 0 . ​(Hint: use Math.pow or Math.sqrt)​.

function calcQuad(a, b, c) {
  const D = Math.pow(b, 2) - 4 * a * c;
  if (D >= 0) {
    if (a !== 0) {
      const a1 = (-b + Math.sqrt(D)) / (2 * a);
      const a2 = (-b - Math.sqrt(D)) / (2 * a);
      if (a1 !== a2) {
        return `Solutions are ${a1} and ${a2}`;
      }

      return `Solution is ${a1}`;
    }

    return 'Enter valid constants';
  }

  return 'Solution does not exists';
}

console.log(calcQuad(1, 2, 1));
console.log(calcQuad(0, 4, -5));
console.log(calcQuad(3, -8, 12));
console.log(calcQuad(5, -13, 6));
