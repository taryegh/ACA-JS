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
