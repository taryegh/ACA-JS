'use strict';


// 3. Write a recursive function to determine whether all digits of the number are odd or not.

function checkDigOdd(n) {
  if (n < 10) {
    if (n % 2 === 0) {
      return false;
    }
    return true;
  }

  return (checkDigOdd(n % 10) && checkDigOdd(Math.floor(n / 10)));
}

console.log(checkDigOdd(4211133));
console.log(checkDigOdd(7791));
console.log(checkDigOdd(5));
