'use strict';


// 1. Write the code, one line for each action:

/* Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. */

function f1() {
  let user = {};
  user.name = 'John';
  user.surname = 'Smith';
  user.name = 'Pete';
  delete user.name;
  console.log(user);
}
//f1()




// 2. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
  for(let key in obj) {
    return false;
  }
  return true;
}

let obj = {};
console.log(isEmpty(obj));

let obj2 = { name: 'John' };
console.log(isEmpty(obj2));





// 3. Is it possible to change an object declared with const? What do you think?

const user = {
  name: "John"
};

// does it work?
user.name = "Pete"; // yes - user.name now is 'Pete'






// 4. We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalaries(obj) {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}
console.log(sumSalaries(salaries));




// 5. Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);