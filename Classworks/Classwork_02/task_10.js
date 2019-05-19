'use strict'


// 10. Insert a number. Remove all zeros from the number, except the last one and print the number. If there are at most one zero, print “Nothing to remove”. 

function del0s(n) {
    let res = '';
    let nSt = n.toString();
    let count = 0;

    for (let i = 0; i < nSt.length; i++) {
        if (i === nSt.length - 1) {
            res += nSt[nSt.length - 1];
        }

        if (nSt[i] === '0') {
            count++;
        } else {
            res += nSt[i];
        }
    }

    if (count <= 1) {
        return 'Nothing to remove.';
    } else {
        return +res;
    }
}


console.log(del0s(4050120));
console.log(del0s(7845012));
console.log(del0s(0));
