'use strict'


// 9. Given the following code rewrite it using only two ​if ​operators. (​Hint: ​use logical operators).

function rewriteCode() {
    let n = +prompt();

    let i = 0;
    let j = 0;

    if (n % 2 === 0) {
        !Math.floor(n / 10) ? i += 1 : false;
    }
    if (n % 3 === 0) {
        n % 10 === 1 ? j += 1 : false;
    }
}

rewriteCode();
