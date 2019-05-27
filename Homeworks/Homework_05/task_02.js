'use strict';


// 2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).

function flatArr(arr) {
  if (arr.length <= 1) {
    if (Array.isArray(arr[0])) {
      return flatArr(arr[0]);
    }
    return arr;
  }

  let fEl = arr.splice(0, 1);
  if (Array.isArray(fEl[0])) {
    arr = flatArr(fEl).concat(flatArr(arr));
  } else {
    arr = fEl.concat(flatArr(arr));
  }

  return arr;
}

console.log(flatArr([1, [3, 4, [1, 2]], 10]));
console.log(flatArr([14, [1, [[[3, []]], 1], 0]]));


// another solution
function flArr(arr) {
  return arr.flat(Infinity);
}

console.log(flArr([1, 2, [3, 4, [5, 6]]]));
console.log(flArr([14, [1, [[[3, []]], 1], 0]]));
