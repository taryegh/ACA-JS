'use strict'


// 7. For a given three digit number calculate the sum of its digits.

function calcDigS(n) {
    let s = 0;

    while (n > 0) {
        let lD = n % 10;
        s += lD;
        n = Math.floor(n / 10);
    }

    return s;
}

console.log(calcDigS(306));
console.log(calcDigS(912));
console.log(calcDigS(505));
