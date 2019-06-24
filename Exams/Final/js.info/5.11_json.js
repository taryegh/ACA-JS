'use strict';


// 1. Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};

let toJ = JSON.stringify(user);
let toO = JSON.parse(toJ);
console.log(toO);





// 