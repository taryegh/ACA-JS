'use strict'

// 3. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.


function calcSumDig(n) {
    let SumDigN = 0; // sum of digits of n
    let SumOfResDig = 0; // sum of digits of SumDigN
    
    // calculating sum of digits of n
    while (n >= 1) {
        let lastDig = n % 10;
        SumDigN += lastDig;
        n = Math.floor(n / 10);
    }

    // cheking/discussing whether SumDigN has more than 1 digit
    if (SumDigN / 10 >= 1) {
        while (SumDigN >= 1) {
            let lastDig = SumDigN % 10;
            SumOfResDig += lastDig;
            SumDigN = Math.floor(SumDigN / 10);
        }
        return SumOfResDig;
    } else {
        return SumDigN;
    }
}
console.log(calcSumDig(14));
console.log(calcSumDig(29));
console.log(calcSumDig(999999999999));
