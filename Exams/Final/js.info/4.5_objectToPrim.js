'use strict';

// Example 1
// Symbol.toPrimitive

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// conversions demo:
// alert(user); // hint: string -> {name: "John"}
// alert(+user); // hint: number -> 1000
// alert(user + 500); // hint: default -> 1500





// Example 2
// If there’s no Symbol.toPrimitive then JavaScript tries to find them and try in the order:

// toString -> valueOf for “string” hint.

// valueOf -> toString otherwise.

// For instance, here user does the same as above using a combination of toString and valueOf:


let user2 = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }

};

// alert(user2); // toString -> {name: "John"}
// alert(+user2); // valueOf -> 1000
// alert(user2 + 500); // valueOf -> 1500








// Example 3 - without predefined toString and valueOf methods

let user3 = {
  name: "John",
  money: 1000,

};

// alert(user3); // toString -> 'Object Object'
// alert(+ user3); // valueOf -> NaN
// alert(user3 + 500); // 'Object Object500'




// Example 4
let user4 = {
  name: "John",

  toString() {
    return this.name;
  }
};

// alert(user4); // toString -> John
// alert(user4 + 500); // toString -> John500
// alert(+user4 + 500); // valueOf -> NaN









// Example 5
let obj1 = {
  toString() { // toString handles all conversions in the absence of other methods
    return "2";
  }
};

// alert(obj1 * 2); // 4, ToPrimitive gives "2", then it becomes 2




// Example 6
let obj2 = {
  toString() {
    return "2";
  }
};

// alert(obj2 + 2); // 22 (ToPrimitive returned string => concatenation)




// Example 7
let obj3 = {
  toString() {
    return true;
  }
};

//alert(obj3 + 2); // 3 (ToPrimitive returned boolean, not string => ToNumber)




// small examples
{} + 5; // 5 here {} is considered as a block, not an object literal
console.log({} + 5); // "[object Object]5"

5 + {}; // "5[object Object]", valueOf {} is {} itself, so toString() is called
console.log(5 + {}); // 5[object Object]

+[]; // 0
console.log(+[]); // 0

[] + ''; // ''
console.log([] + ''); // ''

{} + null // 0
console.log({} + null) // "[object Object]null"

null + {} // "null[object Object]"
console.log(null + {}); // "null[object Object]"

0 + null; // 0
console.log(0 + null) // 0
null + 0
console.log(null + 0) // 0


console.log(undefined + {}) // 'undefined[object Object]'
