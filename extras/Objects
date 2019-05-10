'use strict'


// ------------ Task 1 -----------------
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Smith';
delete user.name;






// ------------ Task 2 -----------------
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}


let schedule = {};
console.log(isEmpty(schedule));







// ------------ Task 3 -----------------
const user1 = {
    name: "John"
};

user1.name = "Pete";




// ------------ Task 4 -----------------
// We have an object storing salaries of our team:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.
function sumSalaries(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

console.log(sumSalaries(salaries));



// ------------ Task 5 -----------------
// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
    return obj;
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(multiplyNumeric(menu));
