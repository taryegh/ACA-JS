'use strict';


// 1. Create a script that prompts the visitor to enter two numbers and then shows their sum.

function sum() {
  let a = +prompt('a?');
  let b = +prompt('b?');
  return a + b;
}
//console.log(sum());



// 2. According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

function f2() {
  console.log(Math.round(6.35 * 10) / 10);

}
//f2();





// 3. Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

// The resulting value must be returned as a number.

// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

function readNumber() {
  let n = +prompt('Enter number');
  if (typeof n === 'number' && !isNaN(n)) {
    return n;
  } else if (typeof n === ' ' || n === null) {
    return;
  }
  readNumber();
}
//console.log(readNumber());





// 4. This loop is infinite. It never ends. Why?

/* let i = 0;
while (i != 10) {
  i += 0.2;
} */

function f4() {
  let i = 0;
  while (i < 10) {
    i += 0.2;
  }
}



// 5. The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

/* Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

Examples of its work:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525 */

function random(min, max) {
  let r = min + Math.random() * (max + 1 - min);
  return r;
}
console.log(random(1, 5));