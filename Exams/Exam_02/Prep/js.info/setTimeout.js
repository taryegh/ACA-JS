'use strict';


// 1. This code calls sayHi() after one second:
function sayHi(phrase, who) {
  console.log(phrase + ', ' + who);
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John





// 2. with arrow function
setTimeout(() => console.log('Hello'), 1000);






// 3. we schedule the function and then cancel it (changed our mind). As a result, nothing happens:

let timerId = setTimeout(() => alert("never happens"), 1000);
console.log(timerId); // timer identifier

clearTimeout(timerId);
console.log(timerId); // same identifier (doesn't become null after canceling)




// 4. repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
