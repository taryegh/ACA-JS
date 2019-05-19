'use strict'


// 16. Enter a positive number. Calculate and print its factorial. ( n! = n * (n-1) * (n-2) * … * 3 * 2 * 1 , 0! = 1 )

function calcFact(n) {
    if (n === 1) {
        return n;
    }
    
    return n * calcFact(n - 1);
}

console.log(calcFact(5));
console.log(calcFact(1));
console.log(calcFact(7));
