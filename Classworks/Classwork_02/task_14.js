'use strict'


// 14. Find the biggest common divisor of two inserted numbers.

function findBCD(a, b) {
    let big, small;
    let res;

    if (a >= b) {
        big = a;
        small = b;
    } else {
        big = b;
        small = a;
    }

    for (let i = 0; i < big; i++) {
        if (big % i === 0 && small % i === 0) {
            res = i;
        }
    }

    return res;
}

console.log(findBCD(6, 10));
console.log(findBCD(12, 24));
console.log(findBCD(78, 7));
