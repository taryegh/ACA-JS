"use strict";

// 7. Find the sign of product of three numbers without multiplication operator. Display the specified sign.

function checkSign(...nums) {
  if (nums.indexOf(0) > -1) {
    return "unsigned";
  }

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      count++;
    }
  }

  return count % 2 ? "-" : "+";
}

console.log(checkSign(-14, 5, 0));
console.log(checkSign(-8, 9, -6));
console.log(checkSign(4, 19, -2));
