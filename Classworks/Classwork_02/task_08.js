'use strict'


// 8. Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.

function cont3_0(n) {
    let nSt = n.toString();
    let bool = false;


    for (let i = 2; i < nSt.length; i++) {
        if (nSt[i - 2] === '0' && nSt[i - 1] === '0' && nSt[i] === '0') bool = true;
    }

    return bool ? 'Yes' : 'No';
}

console.log(cont3_0(10154));
console.log(cont3_0(350120003));
console.log(cont3_0(120900));
