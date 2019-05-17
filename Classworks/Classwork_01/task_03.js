'use strict'


// 3. Swap 2 variables, without using any other variables.

function swap(a, b) {
    b = a + b; // b = 20, a = 8
    a = b - a; // a = 12, b = 20;
    b = b - a; // b = 8, a = 12;

    return `a = ${a}, b = ${b}`;
}

console.log(swap(8, 12));
console.log(swap(10, 20));
