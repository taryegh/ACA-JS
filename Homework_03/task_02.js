'use strict'


// 2. Given an array of numbers. Print frequency of each unique number. (Frequency is the count of particular element divided by the count of all elements)

function PrintF(arr) {
    let sArr = arr.slice().sort((a, b) => a - b);
    let fArr = [];
    let count = 1;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
        } else {
            fArr.push(`${arr[i]} => ${count / arr.length}`);
            count = 1;
        }
    }
    
    return fArr;
}

console.log(PrintF([1, 1, 2, 2, 3]))
console.log(PrintF([4, 4]));
console.log(PrintF([1, 2, 3]));
