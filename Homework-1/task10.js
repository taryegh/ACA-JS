'use strict'


// 10. Insert a digit and a number. Check whether the digit contains in the number or not.

function checkDigitInNumber(dig, n) {
    let stN = n.toString();
    let stD = dig.toString();
    let contains = false;

    for (let i = 0; i < stN.length; i++) {
        if (stD === stN[i]) {
            contains = true;
        }
    }

    return contains ? 'Yes' : 'No';
}

console.log(checkDigitInNumber(5, 2463));
console.log(checkDigitInNumber(4, 6));
console.log(checkDigitInNumber(8, 45689));





// Another method

function checkDigitInNumber2(dig, n) {
    let stN = n.toString();
    let stD = dig.toString();

    return stN.match(stD) ? 'Yes' : 'No';
}

console.log(checkDigitInNumber2(1, 11));
console.log(checkDigitInNumber2(4, 6));
console.log(checkDigitInNumber2(8, 45689));






// Another method - recursion

function checkDig(dig, n) {
    let lE = n % 10;
    if (n === 0) {
        return 'No';
    }
    
    if (dig === lE) {
        return 'Yes';
    }
    
    return checkDig(dig, Math.floor(n / 10));

}

console.log(checkDig(1, 100));
