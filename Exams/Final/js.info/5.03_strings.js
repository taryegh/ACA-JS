'use strict';


// 1. Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

function ucFirst(s) {
  return s[0].toUpperCase() + s.slice(1);
}
console.log(ucFirst('sheppard'));



// 2. Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false. The function must be case-insensitive:

function checkSpam(s) {
  let st = s.toLowerCase();
  if (st.includes('viagra') || st.includes('xxx')) return true;
  return false;
}
console.log(checkSpam('xXx'));



// 3. Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

function truncate(s, m) {
  if (s.length > m) {
    return s.slice(0, m) + '...';
  }
  return s;
}
console.log(truncate('aaabbbcccddd', 5));







// 4. We have a cost in the form "$120". That is: the dollar sign goes first, and then the number. Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

function extractCurrencyValue(s) {
  return +s.slice(1);
}
console.log(extractCurrencyValue('$120'));