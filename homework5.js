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
console.log(removeFirstEl([6, 78, 'n', 0, 1]));
console.log(removeFirstEl([5]));
console.log(removeFirstEl([]));






// 2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).
function flatenArr(array) {
    if (array.length <= 1) {
        if (Array.isArray(array[0])) {
            return flatenArr(array[0]);
        } else {
            return array;
        }
    }


    let firstEl = array.splice(0, 1);

    if (Array.isArray(firstEl[0])) {
        array = flatenArr(firstEl).concat(flatenArr(array));
    } else {
        array = firstEl.concat(flatenArr(array));
    }

    return array;
}
console.log(flatenArr([1, [3, 4, [1, 2]], 10]));
console.log(flatenArr([14, [1, [[[3, []]], 1], 0]]));
