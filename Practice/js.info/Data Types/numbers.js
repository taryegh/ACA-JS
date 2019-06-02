'use strict';


// ------------ NUMBERS ----------

// In JavaScript, we shorten a number by appending the letter "e" to the number and specifying the zeroes count:

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
console.log(7.3e9);  // 7.3 billions (7,300,000,000)





// In other words, "e" multiplies the number by 1 with the given zeroes count.
// 1e3 = 1 * 1000
// 1.23e6 = 1.23 * 1000000




// Now let’s write something very small. Say, 1 microsecond (one millionth of a second):
let ms = 0.000001;


// Just like before, using "e" can help. If we’d like to avoid writing the zeroes explicitly, we could say:
let mss = 1e-6; // six zeroes to the left from 1





// There are several built-in functions for rounding:

// Math.floor
// Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
// Math.ceil
// Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
// Math.round
// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4 and -1.1 becomes -1.



// toFixed
// This rounds up or down to the nearest value, similar to Math.round:

let num2 = 12.36;
console.log(num2.toFixed(1)); // "12.4"
// Please note that result of toFixed is a string.If the decimal part is shorter than required, zeroes are appended to the end:

let num3 = 12.34;
console.log(num3.toFixed(5)); // "12.34000", added zeroes to make exactly 5 digits
// We can convert it to a number using the unary plus or a Number() call: +num.toFixed(5).

console.log(+(0.1 + 0.2).toFixed(2));







// Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
// NaN represents an error.
// They belong to the type number, but are not “normal” numbers, so there are special functions to check for them:

// isNaN(value) converts its argument to a number and then tests it for being NaN:

console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true



// But do we need this function? Can’t we just use the comparison === NaN? Sorry, but the answer is no. The value NaN is unique in that it does not equal anything, including itself:

console.log(NaN === NaN); // false





// isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:

console.log(isFinite("15")); // true
console.log(isFinite("str")); // false
console.log(isFinite(Infinity)); // false






// ParseInt, ParseFloat
console.log(parseInt('100px')); // 100
console.log(parseFloat('12.5em')); // 12.5

console.log(parseInt('12.3')); // 12, only the integer part is returned
console.log(parseFloat('12.3.4')); // 12.3, the second point stops the reading





// IMPORTANT
console.log(parseInt('200px')); // 200
console.log(+('200px')); // NaN






// There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:

console.log(parseInt('a123')); // NaN, the first symbol stops the process





// 1. Create a script that prompts the visitor to enter two numbers and then shows their sum.

function promptSum() {
  let a = +prompt('Enter a');
  let b = +prompt('Enter b');
  return `Sum is ${a + b}`;
}
console.log(promptSum(1, 2));








// 2. Why is 6.35 rounded to 6.3, not 6.4?

console.log((6.35 * 10) / 10);







// 3. Create a function readNumber which prompts for a number until the visitor enters a valid numeric value. The resulting value must be returned as a number. The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

function readNumber() {
  let inp = prompt('Enter number');
  let n = +inp;

  if (inp === '' || inp === null) return `you exited the program`;

  if (typeof n === 'number' && !isNaN(n)) {
    return n;
  }

  readNumber();
}
console.log(readNumber());



// 4. The built-in function Math.random() creates a random value from 0 to 1 (not including 1). Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

function rand(min, max) {
  return min + Math.random() * (max - min);
}
console.log(rand(2, 5));







// 5. Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values. Any number from the interval min..max must appear with the same probability

function randomInteger(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randomInteger(1, 3));
