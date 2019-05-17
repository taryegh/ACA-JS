'use strict'


// 8. Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all elements in the array are unique.

function getSub(arr) {
    let sub = [];
    if (arr.length <= 3) {
        sub = arr;
    }

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                sub.push([arr[i], arr[j], arr[k]]);
            }
        }
    }

    return sub;
}

console.log(getSub([5, 9, 23, 0, -2, -1]));
