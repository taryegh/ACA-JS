'use strict';


// 3. Convert a long phrase to its acronym.

function convertAcronym(str) {
  let acr = '';

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      acr += (str[0].toUpperCase());
    }

    if (str[i] === ' ' && str[i + 1]) {
      acr += str[i + 1].toUpperCase();
    }
  }

  return acr;
}

console.log(convertAcronym('Prisoner of War'));
console.log(convertAcronym('Have a good night'));
