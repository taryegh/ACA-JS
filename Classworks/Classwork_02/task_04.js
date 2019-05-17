'use strict'


// 4. Given two numbers. Print powers of 2 between that numbers. (without using Math.pow)

function getPow(beg, end) {
    let arr = [];
    for (let i = 1; i < end; i *= 2) {
        if (i > beg) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(getPow(7, 45));
console.log(getPow(0, 150));
