'use strict';

// 4.	Given a string and a symbol. Find the number of occurrences of the symbol in the string.
function findOccurrence(text, sym) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    text[i] === sym ? count++ : "";
  }
  return count;
}

console.log(findOccurrence("Some text here", ""));
console.log(findOccurrence("another string", "t"));
