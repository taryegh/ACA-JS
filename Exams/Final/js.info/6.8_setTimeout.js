'use strict';


// 1. Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// Using setInterval.
// Using recursive setTimeout.


function printNumbersI(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    console.log(current);
    if (current === to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

printNumbersI(5, 10);



function printNumbersT(from, to) {
  let current = from;

  setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}


printNumbersT(5, 10);








// 2. In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.

// When will the scheduled function run?

// After the loop.
// Before the loop.
// In the beginning of the loop.
// What is alert going to show?

let i = 0;

setTimeout(() => console.log(i), 100); // 100000000

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}