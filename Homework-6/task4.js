'use strict'


// 4. Given a string of digits, output all the contiguous substrings of length n in that string.

function outputSub(str, n) {
    let res = '';
    if (n >= str.length) {
        return str;
    }
    let sub = str.substr(0, n)
    return res += sub + ',' + outputSub(str.substr(1), n);
}
console.log(outputSub('4952195', 3));
console.log(outputSub('abcdfghz', 7));
