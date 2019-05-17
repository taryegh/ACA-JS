'use strict'


// 7. Given a positive number. Print it in reverse order.

function getRev(n) {
    let res = '';

    while (n > 0) {
        let lE = n % 10;
        res += lE;
        n = Math.floor(n / 10);
    }

    return +res;
}

console.log(getRev(1253));
console.log(getRev(122));
