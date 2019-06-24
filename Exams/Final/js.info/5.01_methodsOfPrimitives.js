'use strict';


// 1. Consider the following code:
// Can I add a string property?

let str = "Hello";

//str.test = 5; // cannot , in not use strict undefined will be thrown

//console.log(str.test); // cannot create


let str2 = new String('Hello');
str2.test = 6;
console.log(str2.test);
console.log(str2);