'use strict'


// 3. Write a recursive function to determine whether all digits of the number are odd or not.

function findOdds(n) {
    if (n < 10) {
        if (n % 2 === 0) {
            return false;
        } else {
            return true;
        }
    }

    return (findOdds(n % 10) && findOdds(Math.floor(n / 10)))
}

console.log(findOdds(4211133));
console.log(findOdds(7791));
console.log(findOdds(5));
