'use strict'


// 5. Write a function to find longest substring in a given a string without repeating characters except space character. If there are several, return the last one. Consider that all letters are lowercase.

function findLongestSubstr(str) {
    let res = '';
    let long = '';
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            if (!res.includes(str[i])) {
                res += str[i];
                if (long.length < res.length) {
                    long = res;
                }
            } else {
                let start = res.indexOf(str[i]);
                res = res.substring(start + 1);
                res += str[i];
                if (long.length < res.length) {
                    long = res;
                }
            }
        } else {
            res += ' ';
        }
    }
    
    return long;
}

console.log(findLongestSubstr('"there are no two words in the english language more harmful than "good job".'));
console.log(findLongestSubstr('parting your soup is not a miracle, bruce.'));
