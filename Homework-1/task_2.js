'use strict'


// 2. Given two numbers. Print 1 if one of them is divisible by the other one, otherwise print 0.

function checkIsDevisable(a, b) {
    if ((a % b === 0) || (b % a === 0)) {
        console.log(1);
    } else {
        console.log(0);
    }
}

checkIsDevisable(3, 14);
checkIsDevisable(18, 2);
checkIsDevisable(7, 21);




// Solving with ternary operator

function checkIsDevisableTern(a, b) {
    return a % b === 0 || b % a === 0 ? 1 : 0;
}

console.log(checkIsDevisableTern(3, 14));
console.log(checkIsDevisableTern(18, 2));
console.log(checkIsDevisableTern(7, 21));
