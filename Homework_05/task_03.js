'use strict'


// 3. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.

function calcDig(n) {
    let sumDigN = 0; // sum of digits of n
    let sumOfResDig = 0; // sum of digits of SumDigN
    
    while (n >= 1) {
        let lastDig = n % 10;
        sumDigN += lastDig;
        n = Math.floor(n / 10);
    }

    if (Math.floor(sumDigN / 10)) {
        while (sumDigN > 0) {
            sumOfResDig += sumDigN % 10;
            sumDigN = Math.floor(sumDigN / 10);
        }
        
        return sumOfResDig;
    }
    
    return sumDigN;
}

console.log(calcDig(14));
console.log(calcDig(29));
console.log(calcDig(999999999999));
