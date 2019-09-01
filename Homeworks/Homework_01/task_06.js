"use strict";

// 6. Given three numbers. Sort them by the ascending order

// manual
function sortNum(n1, n2, n3) {
  if (n1 < n2 && n1 < n3) {
    if (n2 < n3) {
      return `${n1}, ${n2}, ${n3}`;
    } else {
      return `${n1}, ${n3}, ${n2}`;
    }
  } else if (n2 < n1 && n2 < n3) {
    if (n1 < n3) {
      return `${n2}, ${n1}, ${n3}`;
    } else {
      return `${n2}, ${n3}, ${n1}`;
    }
  } else if (n3 < n1 && n3 < n2) {
    if (n1 < n2) {
      return `${n3}, ${n1}, ${n2}`;
    } else {
      return `${n3}, ${n2}, ${n1}`;
    }
  }
}

console.log(sortNum(45, 26, 78));
console.log(sortNum(-23, -456, 0));

// Array sort
function sortN(...args) {
  return args.sort((a, b) => a - b);
}

console.log(sortN(45, 26, 78));
console.log(sortN(-23, -456, 0));
