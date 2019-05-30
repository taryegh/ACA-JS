'use strict';


// ---------- CALL, APPLY, BIND -------------


// 1. There’s a special built-in function method func.call(context, …args) that allows to call a function explicitly setting this.The syntax is:

//func.call(context, arg1, arg2, ...);



// 2. We call sayHi in the context of different objects: sayHi.call(user) runs sayHi providing this=user, and the next line sets this=admin:

function sayHi() {
  console.log(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// use call to pass different objects as "this"
sayHi.call(user); // this = John
sayHi.call(admin); // this = Admin








// 3. We use call to call say with the given context and phrase:

function say(phrase) {
  console.log(this.name + ': ' + phrase);
}

let user2 = { name: "John" };

say.call(user2, "Hello"); // John: Hello





// 4. Apply used to call arrays. It also sets this=context. For instance, here say is called with this=user and messageData as a list of arguments:

function say3(time, phrase) {
  console.log(`[${time}] ${this.name}: ${phrase}`);
}

let user3 = { name: "John" };

let messageData = ['10:00', 'Hello']; // become time and phrase


say3.apply(user3, messageData); // [10:00] John: Hello (this=user)







// 5. These two calls are almost equivalent:

// let args = [1, 2, 3];

// func.call(context, ...args); // pass an array as list with spread operator
// func.apply(context, args);   // is same as using apply

// The spread operator ... allows to pass iterable args as the list to call.
// The apply accepts only array-like args.








// 6. How bind works

let user4 = {
  firstName: "John"
};

function func4() {
  console.log(this.firstName);
}

let funcUser4 = func4.bind(user4);
funcUser4(); // John




// 7. Trying bind with object

let user5 = {
  firstName: "John",
  sayHi5() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

let sayHiv = user5.sayHi5.bind(user5);

sayHiv(); // Hello, John!





function f() {
  console.log(this); // undefined
}
f()






// 8. There’s a value in the property of a function. Will it change after bind? Why, elaborate?
function sayHi6() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi6.bind({
  name: "John"
});

console.log(bound.test); // undefined. The result of bind is another object. It does not have the test property.



function printName(name) {
  console.log('Hi ' + name);
  () => {
    console.log('Bi ' + this.name);
  }
}

console.log(printName('Jack')) // Hi Jack
