'use strict';


// --------- REST AND SPREAD OPERATORS ---------



// 1. First two arguments go into variables and the rest go into titles array. The rest parameters must be at the end!

function showName(firstName, lastName, ...titles) {
  console.log(firstName + ' ' + lastName); // Julius Caesar


  console.log(titles[0]); // Consul
  console.log(titles[1]); // Imperator
  console.log(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");







// 2. Spread turns array into a list of arguments

let arr = [3, 5, 1];
console.log(Math.max(...arr)); // 5







// 3. We also can pass multiple iterables this way, we can even combine the spread operator with normal values:

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1, ...arr2, 25)); // 25





// 4. The spread operator can be used to merge arrays:

let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];

let merged = [0, ...arr3, 2, ...arr4];

console.log(merged); // 0,3,5,1,2,8,9,15







// 5. Using the spread operator to turn the string into array of characters:

let str = "Hello";

console.log([...str]); // H,e,l,l,o
