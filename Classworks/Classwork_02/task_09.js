'use strict'


// 9. A perfect number is a positive integer that is equal to the sum of its proper positive divisors. Print all perfect numbers between 1 and 500.

function getPerf() {
    let arr = [];

    for (let i = 1; i <= 500; i++) {
        let res = 0;

        for (let j = 1; j < i; j++) {
            if (i % j === 0) res += j;
        }

        if (res === i) arr.push(i);
    }

    return arr;
}

console.log(getPerf());
