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






// ------ THIS ---------

// ------------ Task 1 -----------------
// What is the result of this code?
let user = {
    name: "John",
    go: function () { console.log(this.name) }
}; // if not semicolon, error will be thrown

(user.go)();






// ------------ Task 2 -----------------
let obj, method;
obj = {
    name: 'a',
    go: function () { console.log(this); }
};

obj.go();               // (1) [object ]
(obj.go)();             // (2) [object ]
(method = obj.go)();    // (3) undefined - because of () being outside
(obj.go || obj.stop)(); // (4) undefined - because of () being outside






// ------------ Task 3 -----------------
// Here the function makeUser returns an object. What is the result of accessing its ref? Why?
function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();

alert(user.ref.name); // Error: Cannot read property 'name' of undefined









// ------------ Task 4 -----------------
// Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
    
    read: function() {
        this.a = +prompt('a : Please enter a value', '0');
        this.b = +prompt('b : Please enter a value', '0');
    },
    sum: function() { 
        return this.a + this.b;
    },
    mul: function() {
        return this.a * this.b; 
    }
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
