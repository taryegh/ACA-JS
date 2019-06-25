'use strict';

// 1.
function sayHi1() {
  if (true) {
    var phrase = "Hello";
  }

  console.log(phrase); // 'Hello'
}

sayHi1();
//console.log(phrase); // Error: phrase is not defined (Check the Developer Console)


// 2.
function sayHi2() {
  phrase = "Hello";

  if (false) {
    var phrase;
  }

  console.log(phrase); // 'Hello'
}
sayHi2();



// 3.
function sayHi3() {
  console.log(phrase);

  var phrase = "Hello";
}
sayHi3();




// 4.
function sayHi4() {
  var phrase; // declaration works at the start...

  console.log(phrase); // undefined

  phrase = "Hello"; // ...assignment - when the execution reaches it.
}

sayHi4();







// 5.
function sayHi5() {
  if (true) {
    let phrase = "Hello";
  }

  console.log(phrase); // reference error, no phrase defined
}
//sayHi5();






// 6.
function sayHi6() {
  phrase = "Hello"; // reference error

  if (false) {
    let phrase;
  }

  console.log(phrase); // Reference error
}
//sayHi6();





// 7.
function sayHi7() {
  console.log(phrase); // Reference error, cannot access phrase before initialization

  let phrase = "Hello";
}
// sayHi7();






// 8.
function sayHi8() {
  let phrase;

  console.log(phrase); // undefined

  phrase = "Hello";
}

// sayHi8();




// 9.
function f1() {
  x++; //error
}
f1();
let x = 5;

console.log(x);






// 10.
function f1() {
  x++; //will work
}
let x = 5;
f1();


console.log(x); 6
