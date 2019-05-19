'use strict'


// 11. Given a number n (0 ≤ n ≤ 100) you should print the smallest positive number such that its digits product is equal to n.  

function prSmallPos(n) {
    if (n < 0 || n > 100) return 'Enter valid number';

    for (let i = 0; i < 100; i++) {
        let j = i;
        let prod = 1;

        while (j > 0) {
            let lE = j % 10;
            prod *= lE;
            j = Math.floor(j / 10);
        }

        if (prod === n) {
            return i;
        }
    }

    return 'N/A';

}

console.log(prSmallPos(10));
console.log(prSmallPos(18));
console.log(prSmallPos(81));
