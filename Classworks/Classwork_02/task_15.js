'use strict'


// 15.	Given a number. Print all prime factors of the number.

function divPrime(n) {
    let a = printPrime(n);
    let pFact = []

    for (let i = 0; i <= a.length; i++) {
        if (n % a[i] === 0) {
            pFact.push(a[i]);
        }
    }

    return pFact;
}

console.log(divPrime(420));
console.log(divPrime(99));


// printing primes
function printPrime(n) {
    let arr = []
    let bool = true;

    for (let j = 2; j < n; j++) {

        for (var i = 2; i < j; i++) {
            if (j % i === 0) {
                bool = false;
            }
        }

        if (bool === true) arr.push(j);

        bool = true;
    }

    return arr;
}

console.log(printPrime(200));
