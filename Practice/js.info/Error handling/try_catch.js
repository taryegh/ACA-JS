'use strict';

// -------- Try Catch ---------



// 1.
try {

  console.log('Start of try runs');  // (1) <--

  // ...no errors here

  console.log('End of try runs');   // (2) <--

} catch (err) {

  console.log('Catch is ignored, because there are no errors'); // (3)

}

console.log("...Then the execution continues");


// 2.
try {

  console.log('Start of try runs');  // (1) <--

  lalala; // error, variable is not defined!

  console.log('End of try (never reached)');  // (2)

} catch(err) {

  console.log(`Error has occurred!`); // (3) <--

}

console.log("...Then the execution continues");






// 3. For try..catch to work, the code must be runnable. In other words, it should be valid JavaScript.
try {
  {{{{{{{{{{{{ // will not work - Syntax error will be received
} catch(e) {
    alert("The engine can't understand this code, it's invalid");
}





// 4. try..catch works synchronously If an exception happens in “scheduled” code, like in setTimeout, then try..catch won’t catch it
try {
  setTimeout(function () {
    noSuchVariable; // script will die here
  }, 1000);
} catch (e) {
  console.log("won't work");
}




//5. To catch an exception inside a scheduled function, try..catch must be inside that function:

setTimeout(function () {
  try {
    noSuchVariable; // try..catch handles the error!
  } catch {
    console.log("error is caught here!");
  }
}, 1000);




// 6. 
try {
  lalala; // error, variable is not defined!
} catch (err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // lalala is not defined
  console.log(err.stack); // ReferenceError: lalala is not defined at ...
  
  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  console.log(err); // ReferenceError: lalala is not defined
}





// 7.
let json = "{ bad json }";

try {
  
  let user = JSON.parse(json); // <-- when an error occurs...
  console.log(user.name); // doesn't work
  
} catch (e) {
  // ...the execution jumps here
  console.log("Our apologies, the data has errors, we'll try to request it one more time.");
  console.log(e.name);
  console.log(e.message);
}






// 8. 
let json = '{ "age": 30 }'; // incomplete data

try {
  
  let user = JSON.parse(json); // <-- no errors
  console.log(user.name); // no name!
  
} catch (e) {
  console.log("doesn't execute");
}




// 9. Errors
let error1 = new Error();
console.log(error1);

let error2 = new SyntaxError();
console.log(error2);

let error3 = new ReferenceError();
console.log(error3);




// 10. Let’s see what kind of error JSON.parse generates:
try {
  JSON.parse("{ bad json }");
} catch (e) {
  console.log(e.name); // SyntaxError
  console.log(e.message); // Unexpected token o in JSON at position 0
}






// 11.
let json = '{ "age": 30 }'; // incomplete data

try {
  
  let user = JSON.parse(json); // <-- no errors
  
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }
  
  console.log(user.name);
  
} catch (e) {
  console.log("JSON Error: " + e.message); // JSON Error: Incomplete data: no name
}







// 12.
let json = '{ "age": 30 }'; // incomplete data

try {
  user = JSON.parse(json); // <-- forgot to put "let" before user
  
  // ...
} catch(err) {
  console.log("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (no JSON Error actually)
}





// 13.
// try {
//   ... try to execute the code ...
// } catch(e) {
//   ... handle errors ...
// } finally {
//   ... execute always ...
// }




// 14. The finally clause works for any exit from try..catch. That includes an explicit return. In the example below, there’s a return in try. In this case, finally is executed just before the control returns to the outer code.

function func() {
  try {
    return 1;

  } catch (e) {
    /* ... */
  } finally {
    console.log('finally');
  }
}

console.log(func()); // first works alert from finally, and then this one
