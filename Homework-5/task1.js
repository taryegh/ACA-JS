'use strict'


// 1. Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...)


function removeFirstEl(array) {
    // base case: removing the last element
    if (array.length <= 1) {
        array.pop();
        return array;
    }

    // poping the last element, till reaching the base case, then pushing the last element back
    let last = array.pop();
    removeFirstEl(array).push(last);
    return array;
}
console.log(removeFirstEl([6, 78, 'n', 0, 1]));
console.log(removeFirstEl([5]));
console.log(removeFirstEl([]));
