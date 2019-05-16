'use strict'


// 6. Write a function to compute a new string from the given one by moving the first char to come after the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.

function moveCh(str) {
    let res = '';
    for (let i = 0; i < str.length; i += 3) {
        
        res = res + str.substring(i + 1, i + 3) + str.charAt(i);
        // res = res + string.charAt(i + 1) + string.charAt(i + 2) + string.charAt(i)
    }
    
    return res;
}

console.log(moveCh('dfgjkloyp'));
console.log(moveCh('aweyoolp'));
