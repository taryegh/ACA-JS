'use strict';


// ----------- ARRAYS ------------

// 1. What is this code going to show?
function fr() {
  let fruits = ["Apples", "Pear", "Orange"];
  let shoppingCart = fruits;
  shoppingCart.push("Banana");
  console.log(fruits.length); // 4
}
fr();





// 2.Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

function createArrSt() {
  let arrSt = ['Jazz', 'Blues'];
  arrSt.push('Rock-n-Roll');
  arrSt[Math.floor(arrSt.length / 2)] = 'Classics';
  let fE = arrSt.shift();
  arrSt.unshift('Rap', 'Reggae');

  return arrSt;
}
console.log(createArrSt());






// 3. What is the result? Why?
let arr = ["a", "b"];

arr.push(function () {
  console.log(this);
})

arr[2](); // ?






// 4. Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

// WHY THIS IS NOT WORKING?
/*
function sumInput(arr = []) {
  let s = prompt('Enter number');
  let n = +s;
  let sum = 0;

  if (s === '' || isNaN(n) || s === null) {
    let sum = arr.reduce((pr, cur) => pr + cur);
    return sum;
  }
  
  arr.push(n);
  sumInput(arr);
}
console.log(sumInput());
*/


function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt('Enter number');

    if (value === '' || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(sumInput());
