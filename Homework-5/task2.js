'use strict'

// 2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).



function flatenArr(array) {
    // base case: dealing with last element
    if (array.length <= 1) {
        if (Array.isArray(array[0])) {
            return flatenArr(array[0]);
        } else {
            return array;
        }
    }

    // cutting first element of the array, checking whether it contains an array, concating to the rest part 
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
