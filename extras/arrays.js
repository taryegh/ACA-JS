'use strict'


// ------------- Task 1 -----------
// What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(fruits.length);





// ------------- Task 2 -----------
// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
if (styles.length % 2 !== 0) {
    let middle = Math.floor(styles.length / 2);
    styles[middle] = 'Classics';
} else {
    let middle = Math.ceil(styles.length / 2);
    styles[middle] = 'Classics';
}
console.log(styles);
console.log(styles[0]);
styles.unshift('Rap', ' Reggae');
console.log(styles);





// ------------- Task 3 -----------
//What is the result? Why?

let arr = ["a", "b"];

arr.push(function () {
    console.log(this);
})

arr[2]();






// ------------- Task 4 -----------
// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.


function sumInput(arr = []) {
    
    let val = +prompt('enter values');


    if (isNaN(val) || typeof val !== 'number' || val === null ) {
        return arr;
    }

    arr.push(val);
    return sumInput(arr);
}
console.log(sumInput());
