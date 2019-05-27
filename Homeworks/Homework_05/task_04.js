'use strict';


// 4. Given an array and a number N. Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift()).

function rotArr(arr, N) {
  const n = (N > 0) ? N : arr.length + N;
  if (arr.length === n) return arr;

  const lP = arr.splice(n, 1);
  return lP.concat(rotArr(arr, n));
}

console.log(rotArr(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(rotArr(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));
