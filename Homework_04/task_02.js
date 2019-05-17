'use strict'


// 2. Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even. The numbers obtained should be printed in a comma-separated sequence on a single line.

function getEvens(st, end) {
    let res = '';
    
    for (let i = st; i <= end; i++) {
        let arr = [];
        let j = i;
        let nToSt = i.toString();
        
        while (j > 0) {
            let lDig = j % 10;
            if (lDig % 2 === 0) {
                arr.unshift(lDig);
            }
            j = Math.floor(j / 10);
        }
        
        if (nToSt.length === arr.length) {
            res += i + ', ';
        }
        
    }
    
    if (!res) return 'Such numbers does not exist.';
    
    return res;
}
console.log(getEvens(19, 42));
console.log(getEvens(99, 99));
