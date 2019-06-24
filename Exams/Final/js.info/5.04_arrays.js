'use strict';


//1. What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];


let shoppingCart = fruits;
shoppingCart.push("Banana");


console.log(fruits.length); // 4




// 2. Let’s try 5 array operations.

/* Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array. */

let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor(styles.length / 2)] = 'Classics';
let fE = styles[0];
console.log(fE);
styles.push('Rap', 'Reggae');
console.log(styles);





// 3. What is the result? Why?
let arr = ["a", "b"];

arr.push(function () {
  console.log(this);
})

arr[2](); // ["a", "b", ƒ]




// 4. Write the function sumInput() that:

/* Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero. */

function sumInput() {
  let arr = [];
  let bool = true;
  
  while (bool) {
    let s = prompt('enter num');
    let p = +s;
    
    if (typeof p === 'number' && !isNaN(p)) {
      arr.push(p);
    }

    if (isNaN(p) || p === null || s === '') {
      return arr;
    }

  }
}
// console.log(sumInput());











