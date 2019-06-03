'use strict';


// ---------- STRING ----------

// 1. Write a function ucFirst(str) that returns the string str with the uppercased first character.

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('John'));




// 2. Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false. The function must be case-insensitive:

function checkSpam(str) {
  let s = str.toLowerCase();
  if (s === 'viagra' || s === 'xxx') return true;

  return false;
}

console.log(checkSpam('viaGRa'));
console.log(checkSpam('xXx'));
console.log(checkSpam('xX'));






// 3. Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength. The result of the function should be the truncated (if needed) string.

function truncate(str, maxlength) {
  if  (str.length > maxlength) {
    return str.slice(0, maxlength) + '…';
  }
  return str;
}

console.log(truncate('Hey John, how are you?', 9));






// 4. We have a cost in the form "$120". That is: the dollar sign goes first, and then the number. Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue('$150'));
