'use strict'


// 1. Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...)
function removeFirstEl(array) {
    if (array.length <= 1) {
        array.pop();
        return array;
    }

    let last = array.pop();
    removeFirstEl(array).push(last);
    return array;
}
console.log(removeFirstEl([5, 6, 7]));
