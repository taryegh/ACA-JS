'use strict'


// 1. Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...)

function removeFirstEl(arr) {
    if (arr.length <= 1) {
        arr.pop();
        return arr;
    }

    let lEl = arr.pop();
    removeFirstEl(arr).push(lEl);
    return arr;
}

console.log(removeFirstEl([6, 78, 'n', 0, 1]));
console.log(removeFirstEl([5]));
console.log(removeFirstEl([]));
