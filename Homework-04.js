'use strict'


// 1. Write a function which receives an array and a number as arguments and returns a new array from the elements of the given array which are larger than the given number.

function getSubArr(arr, n) {
    let largeNs = [];
    arr.forEach(el => {
        if (el > n) {
            largeNs.push(el);
        }
    })

    return largeNs.length > 0 ? largeNs : 'Such values do not exist.';
}
console.log(getSubArr([10, 25, 16, -5, 30, 15, 24], 16));
console.log(getSubArr([1, 1, 2, -3, 0, 8, 4, 0], 9));
