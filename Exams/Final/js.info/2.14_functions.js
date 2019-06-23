'use strict';


// 1. The following function returns true if the parameter age is greater than 18.

/* Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR || */

function checkAge(a) {
  return a > 18 ? true : confirm('Parents permission?');
}
// console.log(checkAge(17));




// 2. Write a function min(a,b) which returns the least of two numbers a and b.

/* For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1 */

function min(a, b) {
  return a < b ? a : b;
}
console.log(min(2, 4));





// 3. Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

/* pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1 */

function pow(x, n) {
  let res = 1;
  for (let i = 0; i <n; i++) {
    res *= x;
  }
  return res;
}
console.log(pow(2, 3));





