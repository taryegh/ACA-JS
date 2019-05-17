'use strict'


// 5. Given an array of numbers which is almost sorted in ascending order. Find the index where sorting order is violated.

function findSortViolation(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) return i;
    }

    return - 1;
};

console.log(findSortViolation([2, 12, 15, 48, 64]));
console.log(findSortViolation([-9, -4, -4, 3, 12, 4, 5]));
