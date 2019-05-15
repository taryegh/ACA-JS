'use strict'



// 1. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

function isPrime(n) {
    let bool = true;

    if (n === 0 || n === 1) {
        bool = false;
    } else if (n === 2) {
        bool = true;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                bool = false;
                break;
            }
        }
    }

    return bool ? 'yes' : 'no';
}

console.log(isPrime(401));
console.log(isPrime(63));
