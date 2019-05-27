'use strict';


// 1. Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function findLargestProdOfAdj(array) {
  const prodArr = [];

  for (let i = 1; i < array.length; i++) {
    const prev = array[i - 1];
    const cur = array[i];
    const prod = prev * cur;
    prodArr.push(prod);
  }

  return (Math.max(...prodArr));
}
console.log(findLargestProdOfAdj([1, 2, 3, 4]));
console.log(findLargestProdOfAdj([0, 1]));
console.log(findLargestProdOfAdj([1, 9, 2, -8]));
