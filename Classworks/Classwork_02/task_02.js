'use strict'


// 2. Given a number print its digits count.

function countDig(n) {
    let nSt = Math.abs(n).toString();
    return nSt.length;

}

console.log(countDig(78756));
console.log(countDig(-122));
console.log(countDig(8));
console.log(countDig(0));
