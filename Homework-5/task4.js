'use strict'

// 4. Given an array and a number N. Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift()).


function rotateArray(array, N) {
    let n = N > 0 ? N : array.length - N;
    
    // base:
    if (array.length <= n) {
        return array;
    }

    // cutting the necessary part, concating to the rest
    let firstEl = array.splice(0, n);
    let arr = rotateArray(array, n).concat(firstEl);
    return arr;
}
console.log(rotateArray(['a', 'b', 'c', 'd', 'e', 'f', 'g,', 'h'], 3));
console.log(rotateArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));
