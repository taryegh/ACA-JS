'use strict'


// 6. An Armstrong number is a 3 digit number for which sum of cube of its digits is equal to the number itself. Write a program to check whether the given number is an Armstrong number.

function checkArms(n) {
    let sum = 0;
    let nSt = n.toString();

    if (nSt.length !== 3) return 'No';

    for (let i = 0; i < nSt.length; i++) {
        sum += Math.pow(+nSt[i], 3);
    }

    return sum === n ? 'Yes' : 'No';
}

console.log(checkArms(124));
console.log(checkArms(153));
console.log(checkArms(371));
