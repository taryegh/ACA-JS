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


    if (isNaN(val) || typeof val !== 'number') {
        return arr;
    }

    arr.push(val);
    return sumInput(arr);
}
console.log(sumInput());








// Array methods


// ------------- Task 1 -----------
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelize(str) {
    return str
        .split('-')
        .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
        .join('');

}
console.log(camelize('background-color'));






// ------------- Task 2 -----------
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them. The function should not modify the array. It should return the new array.

function filterRange(arr, a, b) {
    let res = [];
    arr.forEach(el => {
        if (el >= a && el <= b) {
            res.push(el);
        }
    });
    return res;
}
console.log(filterRange([5, 3, 8, 1], 1, 4));




// another solution with filter
function filRange(arr, a, b) {
    return arr.filter(item => (item >= a && item <= b));
}
console.log(filRange([5, 3, 8, 1], 1, 4));










// ------------- Task 3 -----------
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b. The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] >= a && arr[i] <= b)) {
            arr.splice(i, 1);
        }
    }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);








// ------------- Task 4 -----------
// Sort in the reverse order

function reverse(arr) {
    arr.sort((a, b) => b - a);
}
let revArr = [5, 2, 1, -10, 8];
reverse(revArr);
console.log(revArr);




// reversing from one side to another
function rev(arr) {
    arr.reverse();
}
let a = [5, 2, 1, -10, 8];
rev(a);
console.log(a);








// ------------- Task 5 -----------
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified. Create a function copySorted(arr) that returns such a copy.

function copySorted(arr) {
    return arr.slice().sort();
}

let linkArr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(linkArr);

console.log(sorted);
console.log(linkArr);










// ------------- Task 6 -----------
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(item => item.name);
console.log(names);









// ------------- Task 7 -----------
// You have an array of user objects, each one has name, surname and id. Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(item => `id: ${item.id}, ${item.name} ${item.surname}`);
console.log(usersMapped);









// ------------- Task 8 -----------
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let objArr = [pete, john, mary];


function sortByAge(arr) {
    let ageArr = arr.map(item => item);

    return ageArr.sort((a, b) => a.age - b.age);
}
console.log(sortByAge(objArr));
