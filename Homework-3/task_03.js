'use strict'


// 3. Given an array of strings and numbers. Print the number of integers and the number of strings in the array.

function printQ(arr) {
    let nCount = 0;
    let stCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            nCount += 1;
        } else if (typeof arr[i] === 'string') {
            stCount += 1;
        }
    }

    return `Numbers: ${nCount}, Strings: ${stCount}`;
}

console.log(printQ([1, '10', 'hi', 2, 3]));
console.log(printQ([1, 4, 'i am a string', '456']));
