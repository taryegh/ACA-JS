"use strict";

function makeCounter() {
  let count = 0;

  return function() {
    return count++; // has access to the outer "count"
  };
}

let counter = makeCounter();

alert(counter()); // 0
alert(counter()); // 1
alert(counter()); // 2