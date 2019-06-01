'use strict';


// Primitives are 6 types: 
// string, 
// number, 
// boolean, 
// symbol, 
// null 
// undefined.


// Objects
// Can be created with {}, for instance: {name: "John", age: 30}. There are other kinds of objects in JavaScript: functions, for example, are objects.





// A number has methods of its own, for instance, toFixed(n) rounds the number to the given precision:
let n = 1.23456;
console.log( n.toFixed(2) ); // 1.23





// Type of
console.log( typeof 0 ); // "number"
console.log( typeof new Number(0) ); // "object"!






// Objects are always truthy:
let zero = new Number(0);
console.log(Boolean(zero)); // true

let nu = new Number(null);
console.log(Boolean(nu)); // true

// Here I just make null to boolean
console.log(Boolean(null)); // false








// Using functions String/Number/Boolean without new is a totally sane and useful thing. They convert a value to the corresponding type: to a string, a number, or a boolean (primitive).

// For example, this is entirely valid:
let num = Number("123"); // convert a string to number




// null/undefined have no methods. The special primitives null and undefined have no corresponding “wrapper objects” and provide no methods. In a sense, they are “the most primitive”.





// 1. Consider the following code:

let str = "Hello";
str.test = 5;

console.log(str.test); // Uncaught TypeError: Cannot create property 'test' on string 'Hello'

// Depending on whether you have use strict or not, the result may be:
// undefined (no strict mode)
// An error (strict mode).

// 1. When a property of str is accessed, a “wrapper object” is created.
// 2. In strict mode, writing into it is an error.
// 3. Otherwise, the operation with the property is carried on, the object gets the test property, but after that the “wrapper object” disappears.

// So, without strict mode, in the last line str has no trace of the property.
// This example clearly shows that primitives are not objects.
// They can’t store additional data.
