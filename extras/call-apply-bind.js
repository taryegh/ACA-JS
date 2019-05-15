// ------ Call -------

// example 1
function say(phrase) {
    console.log(this.name + ': ' + phrase);
}

let user = { name: "John" };

say();
say.call(user, 'hihi');


// example 2
let john = {
    name: 'John',
    age: 26,
    sayHi: function () {
        console.log(`I am ${this.name}, I am ${this.age}`);
    }
}
john.sayHi();



let jane = {
    name: 'Jane',
    age: 20
}
john.sayHi.call(jane);






// ------ Apply -------

// example 1
let person = {
    fullName: function (city, country) {
        console.log(this.firstName + " " + this.lastName + ", " + city + ", " + country);
    }
}
var jack = {
    firstName: "John",
    lastName: "Doe"
}
person.fullName.apply(jack, ["Oslo", "Norway"]);



// example 2 - calculating Math.max with apply
// Since JavaScript arrays do not have a max() method, we can apply the Math.max() method with apply.

console.log(Math.max.apply(null, [1, 2, 3]));





// ------ Bind -------

// example 1
let mark = {
    firstName: "Mark"
};

function printName() {
    console.log(this.firstName);
}

let funcUser = printName.bind(mark);
funcUser();
