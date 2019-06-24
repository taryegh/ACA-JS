'use strict';


let obj = {
  name: 'John',
  surname: 'Hammond',
  age: 26,
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));



// 1. Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(s) {
  let sum = 0;
  for (let val of Object.values(s)) {
    sum += val;
  }
  return sum;
}

console.log(sumSalaries(salaries));





// 2. Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};

function count(o) {
  return Object.keys(o).length;
}
console.log(count(user));


