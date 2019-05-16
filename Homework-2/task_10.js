'use strict'


// 10. Given an array of numbers. Find the index of the second maximum element.

function findSecondMax(arr) {
    let biggest = -Infinity; let nextBiggest = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i];
        
        if (cur > biggest) {
            nextBiggest = biggest;
            biggest = cur;
        } else if (cur < biggest && cur > nextBiggest) {
            nextBiggest = cur;
        }
    }
    
    return arr.indexOf(nextBiggest);
}

console.log(findSecondMax([23, -98, 0, -456, 12, 8]));
console.log(findSecondMax([-60, 2, 43, -18, 5, -19, 36, 7, 56]));





// another method

function SecMax(arr) {
    let sArr = arr.slice().sort((a, b) => a - b);
    sArr.pop();
    let lEl = sArr.pop();
    return arr.indexOf(lEl);

}

console.log(SecMax([23, -98, 0, -456, 12, 8]));
console.log(SecMax([-60, 2, 43, -18, 5, -19, 36, 7, 56]));
