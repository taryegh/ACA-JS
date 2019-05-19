'use strict'


// 20. Print the following number pattern:    
// 1
// 12
// 123
// 1234
// 12345
// 1234
// 123
// 12
// 1

function printPat(n) {
    let res = '';
    let k = n;

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {
            res += j;
        }
        res += '\n';
    }

    for (let i =1; i <= k - 1; i++) {

        for (let j = 1; j <= n - 1; j++) {
            res += j;
        }
        n = n - 1;
        res += '\n'
    }

    return res;
}

console.log(printPat(5));
