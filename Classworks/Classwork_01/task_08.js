'use strict'


// 8. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

function isDev(a, b) {
    return a % b === 0 || b % a === 0 ? 1 : 0;
}

console.log(isDev(3, 14));
console.log(isDev(18, 2));
