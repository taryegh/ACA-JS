'use strict'


// 9.	Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers by the given num length over the specified interval (from a to b).

function createEvenlySpaced(a, b, n) {
    if (a <= b && n > 0) {
        let arr = [];
        let sp = (b - a) / (n - 1);
        
        for (let i = a; i <= b; i += sp) {
            arr.push(i);
        }
        
        return arr;
    }
}

console.log(createEvenlySpaced(1, 5, 1));
console.log(createEvenlySpaced(10, 100, 3));
console.log(createEvenlySpaced(1, 5, 6));
