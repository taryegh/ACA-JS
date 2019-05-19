'use strict'


// 17. Enter a number. Reverse its first and last digits. Print the new number.

function revNum(n) {
    let nSt = n.toString();

    if (nSt.length === 1) return n;

    let fEl = nSt[0];
    let lEl = nSt[nSt.length - 1];
    let mid = nSt.slice(1, nSt.length - 1);
    let aug = lEl + mid + fEl;
    
    return +aug;
}

console.log(revNum(2));
console.log(revNum(13));
console.log(revNum(895796));
