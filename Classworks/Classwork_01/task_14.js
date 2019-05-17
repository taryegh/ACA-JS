'use strict'


// 14.	Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid and “no" otherwise. (Triangle is valid if the sum of its two sides are greater than the third side).

function recValid(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return 'Yes';
    } else {
        return 'No';
    }
}

console.log(recValid(2, 3, 5));
console.log(recValid(3, 4, 5));
console.log(recValid(10, 5, 12));
console.log(recValid(47, 11, 26));
