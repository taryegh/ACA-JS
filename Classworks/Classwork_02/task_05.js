'use strict'


// 5. Given a number as input, insert dashes (-) between each two even numbers.

function addDash(n) {
    let nSt = n.toString();
    let res = '';

    for (let i = 1; i <= nSt.length; i++) {
        let prev = nSt[i - 1];
        let cur = nSt[i];
        res += prev;

        if (+prev % 2 === 0 && +cur % 2 === 0) {
            res += '-';
        }
    }

    return res;
}

console.log(addDash(25468));
console.log(addDash(7180322));
console.log(addDash(42));
console.log(addDash(222));
