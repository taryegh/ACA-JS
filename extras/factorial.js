// Factorial with Recursion
function factRec(n) {
    if (n === 1) {
        return n
    }
    return n * fact(n - 1);
}
console.log(factRec(5));





// Factorial with loop
function fact(n) {
    let prod = 1;
    for (let i = 1; i <= n; i++) {
        prod *= i;
    }
    return prod;
}
console.log(fact(5));
