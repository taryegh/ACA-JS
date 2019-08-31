"use strict";

// 6. Given three numbers. Sort them by the ascending order

function sortNum(n1, n2, n3) {
  if (n1 < n2 && n1 < n3) {
    if (n2 <= n3) {
      console.log(`${n1}, ${n2}, ${n3}`);
    } else {
      console.log(`${n1}, ${n3}, ${n2}`);
    }
  } else if (n2 < n3 && n2 < n3) {
    if (n3 <= n1) {
      console.log(`${n2}, ${n3}, ${n1}`);
    } else {
      console.log(`${n2}, ${n1}, ${n3}`);
    }
  } else if (n2 <= n3) {
    console.log(`${n3}, ${n2}, ${n1}`);
  } else {
    console.log(`${n3}, ${n1}, ${n2}`);
  }
}

sortNum(45, 26, 78);
sortNum(-23, -456, 0);

// another method
function sortN(...args) {
  return args.sort((a, b) => a - b);
}

console.log(sortN(45, 26, 78));
console.log(sortN(-23, -456, 0));
