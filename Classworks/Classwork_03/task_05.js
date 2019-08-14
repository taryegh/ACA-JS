'use strict';

// 5.	Given a string. Check whether the string is palindrome or not.

function isPalindrome(str) {
  const arr = str.split("");
  const rev = [...arr].reverse().join(',');

  return str === rev ? "yes" : "no";
}

console.log(isPalindrome("a"));
console.log(isPalindrome("T"));
console.log(isPalindrome(""));
console.log(isPalindrome("palindrome"));
