'use strict'


// --------- Define Property --------

let user = {
    name: "John"
};

Object.defineProperty(user, "name", {
    writable: false
});

// user.name = "Pete"; // error



let user1 = { };
Object.defineProperty(user1, 'name', {
    value: 'Pete',
    enumerable: true,
    configurable: true
})

console.log(user1.name);
// user1.name = 'John' // error



let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log( JSON.stringify(descriptor, null, 2 ) );





// making user2.name a “forever sealed” constant:
let user2 = { };

Object.defineProperty(user2, "name", {
  value: "John",
  writable: false,
  configurable: false
});







// --------- Getter - Setter --------

let j = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

console.log(j.fullName); // John Smith


let john = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};
john.fullName = 'Jane Malcolm';
console.log(john.name);
console.log(john.surname);
