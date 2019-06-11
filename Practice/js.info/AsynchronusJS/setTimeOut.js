'use strict';

// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Using setInterval.


// Solution 1
function printNumbers(from, to) {
  let i = from;
  setInterval(()=> {
    if (i <= to) {
      console.log(i);
      ++i;
    }
    
  }, 1000)
}

printNumbers(1, 10);




// Solution 2
function printNumbers2(from, to) {
  let i = from;
  let pr = setInterval(() => {
    console.log(i);
    if (i === to) {
      clearInterval(pr);
    }
    i++;
  }, 1000)
}
printNumbers2(1, 10);
