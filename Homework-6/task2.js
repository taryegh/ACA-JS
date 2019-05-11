'use strict'


// 2. Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.

function makeSequence(array) {

    let sequance = [];
    let min = Math.min(...array);
    let max = Math.max(...array);

    for (let i = min; i <= max; i++) {
        sequance.push(i);
    }
    return sequance;
}
console.log(makeSequence([1, 2, 3, 5, 5, 9]));
