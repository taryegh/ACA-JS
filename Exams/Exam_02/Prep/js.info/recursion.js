'use strict';


// --------- RECURSION ---------

// 1. Recursive way to calculate pow(x, n)
function pow(x, n) {
  if (n === 1) return x;
  
  return x * pow(x, n - 1);
}

console.log(pow(2, 3)); // 8


// with ternary operator
function powT(x, n) {
  return n === 1 ? x : x * powT(x, n - 1); 
}

console.log(powT(2, 4));


