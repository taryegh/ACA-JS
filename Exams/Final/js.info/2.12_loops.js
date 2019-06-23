'use strict';


// 1. What is the last value alerted by this code? Why?

(function f1() {
  let i = 3;

  while (i) {
    console.log(i--); //1 - true
  }
})//();





// 2. For every loop iteration, write down which value it outputs and then compare it with the solution.

// Both loops alert the same values, or not?

function f2() {
  let i = 0;
  while (++i < 5) console.log(i); // 1, 2, 3, 4

  let j = 0;
  while (j++ < 5) console.log(j); // 1, 2, 3, 4, 5
}
//f2();





// 3. For each loop write down which values it is going to show. Then compare with the answer.

//Both loops alert same values or not?

function f3() {
  for (let i = 0; i < 5; i++) console.log(i); // 0, 1, 2, 3, 4

  for (let i = 0; i < 5; ++i) console.log(i); // 0, 1, 2, 3, 4
}
//f3();




// 4. Use the for loop to output even numbers from 2 to 10.

function f4() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
//f4();




//5. Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

/* for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
} */

function f5() {
  let i = 0;
  while (i < 3) {
    console.log(`number ${i}`);
    i++
  }
}
// f5();




// 6. Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

/* The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task. */


function f6() {
  let num;

  do {
    num = +prompt("Enter a number greater than 100?", 0);
  } while (num <= 100 && num);

  return num;
}
//console.log(f6());




// 7. Write the code which outputs prime numbers in the interval from 2 to n.

function prime(n) {
  let str = '';

  outer: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue outer;
    }
    str += `${i}, `;
  }
  return str;
}
console.log(prime(20));
