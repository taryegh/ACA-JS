'use strict'


// 11. Enter a number. Reverse its first and last digits. Print the new number.

function reverseDigs(n) {
    if (n / 10 < 1) {
        return n;
    }

    let stN = n.toString();
    let fEl = stN.slice(0, 1);
    let lEl = stN.slice(stN.length - 1);
    let mid = stN.slice(1, stN.length - 1);
    return +(lEl + mid + fEl);


}

console.log(reverseDigs(2));
console.log(reverseDigs(13));
console.log(reverseDigs(7131135));
