'use strict'


// 2. Given a number n ( n>= 0 ). Print nth Fibonacci number. (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)

function fibN(n) {
    let arr = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        let res = arr[i - 2] + arr[i - 1];
        arr.push(res);
    }
    
    return arr[n];
}

console.log(fibN(0));
console.log(fibN(2));
console.log(fibN(10));
console.log(fibN(20));





// another solution - RECURSION
function fibNRec(n) {
    if (n <= 1) {
        return n;
    }
    
    return fibNRec(n - 1) + fibNRec(n - 2);
}

console.log(fibNRec(0));
console.log(fibNRec(2));
console.log(fibNRec(10));
console.log(fibNRec(20));
