'use strict'


// 1. 1.	Declare 2 variables a and b, such that a > b, and define values for them. Output their 
// a.	sum
// b.	difference (between a and b)
// c.	product
// d.	quotient (between a and b)
// e.	remainder (between a and b)

function arith(a, b) {
    let sum = a + b;
    let dif = a - b;
    let mul = a * b;
    let quo = a / b;
    let r = a % b;

    return {
        sum: sum,
        difference: dif,
        product: mul,
        quotient: quo,
        reminder: r
    }
}

console.log(arith(14, 5));
console.log(arith(99, 11));
console.log(arith(81, 16));
