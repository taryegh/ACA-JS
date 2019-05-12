'use strict'


// Numbers


// ------------- Task 1 -----------
// Create a script that prompts the visitor to enter two numbers and then shows their sum.

function sumNums() {
    let a = parseFloat(prompt('a: enter'));
    let b = parseFloat(prompt('b: enter'));
    return +(a + b).toFixed(2);
}
console.log(sumNums())





// ------------- Task 2 -----------
// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

function readNumber() {
    let num = +(prompt());
    if (isNaN(num) || typeof num !== 'number') {
        return null;
    }
    
    
    return readNumber(num);
    
}
console.log(readNumber());






// ------------- Task 3 -----------
// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log(random(4, 10))
