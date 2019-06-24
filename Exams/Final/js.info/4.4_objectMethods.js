'use strict';

// 1. What is the result of this code?

/* let user = {
  name: "John",
  go: function() { alert(this.name) }
} */

// (user.go)() // error because ; is missing for object. JavaScript does not auto-insert a semicolon before a bracket








// 2. In the code below we intend to call user.go() method 4 times in a row. But calls (1) and (2) works differently from (3) and (4). Why?

let obj, method;

obj = {
  go: function() { console.log(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined - we use this, because of assignment

(obj.go || obj.stop)(); // (4) undefined - we use this because of or operator







// 3. Here the function makeUser returns an object. What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

//console.log( user.ref.name ); // undefined
//console.log(user.ref); // error





// 4. Create an object calculator with three methods:
/* 
read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result. */

let calc = {
  a: null,
  b: null,

  read() {
    this.a = +prompt('Enter a');
    this.b = +prompt('Enter b');
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
}

// calc.read();
// console.log(calc.sum());
// console.log(calc.mul());








// 5. There’s a ladder object that allows to go up and down:

/* let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
}; */

// Modify the code of up, down and showStep to make the calls chainable, like this:
// ladder.up().up().down().showStep(); // 1

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    console.log( this.step );
    return this;
  }
};
ladder.up().up().down().up().down().showStep(); // 1







// extra

let user2 = {
  name: 'John',
  hi() {
    console.log(this.name);
  },
  bye() {
    console.log('Bye');
  }
}

//console.log(user2.name);


if (user2.name === 'John') {
  user2.hi();
} else {
  user2.bye();
}