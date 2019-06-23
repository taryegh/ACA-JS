'use strict';


// 1. What is the code below going to output?

console.log(null || 2 || undefined); // 2




// 2. What will the code below output?

console.log(console.log(1) || 2 || console.log(3)); // 1, 2

/* The call to console.log does not return a value. Or, in other words, it returns undefined.

The first OR || evaluates it’s left operand console.log(1). That shows the first message with 1.
The console.log returns undefined, so OR goes on to the second operand searching for a truthy value.
The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer console.log.
There will be no 3, because the evaluation does not reach console.log(3). */


// 3. What is this code going to show?

console.log(1 && null && 2); // null




// 4. What will this code show?
console.log(console.log(1) && console.log(2)); // 1-it is not returned value, just console log, undefined

/* 
The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done. */



// 5. What will the result be?

console.log(null || 2 && 3 || 4); // 3



// 6. Write an “if” condition to check that age is between 14 and 90 inclusively.“Inclusively” means that age can reach the edges 14 or 90.



function checkAge() {
  let age = +prompt('Enter age');
  if (age >= 14 && age <= 90) {
    return 'Age is between 14 and 90.';
  } else {
    return 'Age is out of 14 and 90 range';
  }
}
//console.log(checkAge());


// 7. Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

if (-1 || 0) console.log('first'); // first
if (-1 && 0) console.log('second');
if (null || -1 && 1) console.log('third'); // third




// 8. Write the code which asks for a login with prompt.

/* If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled.”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled.” */


function checkPass() {
  let l = prompt('Who\'s there?');
  if (l === 'Admin' || l === 'admin') {
    let p = prompt('Enter pass');
    if (p === 'TheMaster') {
      return 'Welcome';
    } else if (p === '' || p === null) {
      return 'Canceled';
    } else {
      return 'Wrong password'
    }
  }
  else if (l === '' || l === null) {
    return 'Canceled';
  } else {
    return 'I don’t know you'
  }
}

// console.log(checkPass());
