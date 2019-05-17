'use strict'


// 3. Count numbers of digit 9 in a number.

function count9(n) {
    let count = 0;

    while (n > 0) {
        let lE = n % 10;
        if (lE === 9) {
            count++;
        }
        n = Math.floor(n / 10);
    }

    return count;
}

console.log(count9(129));
console.log(count9(929));
console.log(count9(192999));
console.log(count9(887));
