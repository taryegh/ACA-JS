'use strict'


// Recursion

// 1. Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// Recursion
function calcSumRec(n) {
    if (n === 1) {
        return n
    }

    return n + calcSumRec(n - 1);
}
console.log(calcSumRec(10000));




// for loop
function calcSumLoop(n) {
    let sum = 0;

    for(let i = 0; i <= n; i++) {
        sum += i;
    }

    return sum;
}
console.log(calcSumLoop(10000));




// Progression formula
function calcSumProg(n) {
    let a1 = 1;
    return n * (a1 + n) / 2;
}
console.log(calcSumProg(10000))








// 2. Write a function factorial(n) that calculates n! using recursive calls.

function factorial(n) {
    if (n === 1) {
        return n;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));






// 3. Write a function fib(n) that returns the n-th Fibonacci number.

function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2)
}
console.log(fib(7));

