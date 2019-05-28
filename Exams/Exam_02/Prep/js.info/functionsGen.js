'use strict';


// --------- FUNCTIONS GENERAL ---------


// 1. A function can access an outer variable
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

showMessage(); // Hello, John






// 2. The function has full access to the outer variable. It can modify it
let userName2 = 'John';

function showMessage2() {
  userName2 = 'Bob';
  let message2 = 'Hello, ' + userName2;
  console.log(message2);
}

console.log(userName2); // John

showMessage2();

console.log(userName2); // Bob







// 3. If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:
let userName3 = 'John';

function showMessage3() {
  let userName3 = 'Bob';

  return 'Hello, ' + userName3; // Bob
}

console.log(showMessage3()); // Hello Bob
console.log(userName3); // John









// 4. Taking outer variable - taking the recent one, but which is assigned before the function call.
function showMessage4(from, text) {
  return from + ': ' + text;
}

let from = 'Ann';

console.log(showMessage4(from, 'Hello')); // Ann: Hello







// 5. If we want to use a “default” text in this case, then we can specify it after =:
function showMessage5(from, text = 'no text given') {
  return from + ': ' + text;
}

console.log(showMessage5('Ann')); // Ann: no text given







// 6. If a function does not return a value, it is the same as if it returns undefined:
function doNothing() { }
console.log(doNothing());



function doNothing2() {
  return;
}
console.log(doNothing());








// 7. Calculating pow(x, n)
function pow(x, n) {
  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= x;
  }

  return res;
}
console.log(pow(2, 3));
