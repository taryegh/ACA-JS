'use strict'


// 1. Print numbers from 10 to 1.

function printUp10() {
    let str = '';

    for (let i = 10; i > 0; i--) {
        str += i + '\n';
    }

    return str;
}

console.log(printUp10());
