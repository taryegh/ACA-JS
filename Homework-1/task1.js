
'use strict'


// 1. Given a number. Print “odd” if the number is odd and “even” if it’s even.

function checkOdd_Even(number) {
    if (number % 2 === 0) {
        return 'The number is even';
    } else {
        return 'The number is odd';
    }
}
checkOdd_Even(123);
checkOdd_Even(35);
checkOdd_Even(70);



// Solving with ternary operator

function checkOdd_EvenTer(n) {
    return n % 2 === 0 ? 'even' : 'odd';
}
console.log(checkOdd_EvenTer(123));
console.log(checkOdd_EvenTer(35));
console.log(checkOdd_EvenTer(70));
