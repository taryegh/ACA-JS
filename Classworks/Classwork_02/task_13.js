'use strict'


// 13. Insert two positive integers n and m between 1 and 10. Compute and print n^m.

function calcPowNm(n, m) {
    if (n >= 1 && n <= 10) {
        let res = Math.pow(n, m);
        return res;
    } else {
        return 'Invalid Number';
    }
}

console.log(calcPowNm(4, 5));
console.log(calcPowNm(6, 10));
