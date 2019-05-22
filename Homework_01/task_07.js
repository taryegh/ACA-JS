'use strict';


// 7. Find the sign of product of three numbers ​without ​multiplication operator. Display the specified sign.


function checkSign(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return 'unsigned';
  }

  const arr = [a, b, c];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count += 1;
    }
  }

  if (count % 2 === 0) {
    return '+';
  }

  return '-';
}

console.log(checkSign(-14, 5, 0));
console.log(checkSign(-8, 9, -6));
console.log(checkSign(4, 19, -2));


// 7. Another method
function checkSign2(...nums) {
  if (nums.indexOf(0) > -1) {
    return 'unsigned';
  }

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      count++;
    }
  }

  return count % 2 ? '-' : '+';
}

console.log(checkSign2(-14, 5, 0));
console.log(checkSign2(-8, 9, -6));
console.log(checkSign2(4, 19, -2));
