'use strict';


// 12. Write a JavaScript function to extract unique characters from a string.

function extractUnique(str) {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (res.includes(str[i])) {
      continue;
    }
    res += str[i];
  }

  return res;
}

console.log(extractUnique('thequickbrownfoxjumpsoverthelazydog'));
