'use strict';


// Nice way

function checkPalindrom (str) {
  return str == str.split('').reverse().join('');
}

console.log(checkPalindrome(‘aka’))



// Another way

function isPalindrome(str) {
  let strLen = str.length;
  str = str.toLowerCase();

  if (strLen === 0 || strLen === 1) {
    return true;
  }

  if (str[0] === str[strLen - 1]) {
    return isPalindrome(str.slice(1, strLen - 1));
  }

  return false;
}

console.log(isPalindrome('level'));
