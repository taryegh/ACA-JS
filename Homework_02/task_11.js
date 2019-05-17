'use strict'


// 11. Given an array of numbers, padding amount and repeat count. Pad the array in the following way: the padding amount specifies how many elements should be taken from the array edges, the repeat amount specifies how many times the pad should be repeated. Also, you should check that  padding amount <= length of array.

function paddingArray(arr, pad, rep) {
    if (pad > arr.length) {
        return 'Invalid padding amount';
    }
    
    let padBeg = arr.slice(0, pad);
    let padFin = arr.slice(arr.length - pad, arr.length);

    for (let i = 0; i < rep; i++) {
        arr.unshift(...padBeg);
        arr.push(...padFin);
    }
    
    return arr;
}

console.log(paddingArray([1, 2, 3, 4], 1, 3));
console.log(paddingArray([1, 2, 3, 4], 2, 1));
console.log(paddingArray([1], 1, 3));
console.log(paddingArray([1], 2, 3));
