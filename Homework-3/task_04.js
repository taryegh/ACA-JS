'use strict'


// 4. Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string. If there are several words which are the longest ones, print the last word (words can be separated by space, comma or hyphen).

function findLongest(str) {
    //let res = str.split(/[ ,.-]+/); // with RegEx
    let res = str.split(' ').join().split('.').join().split(',');
    let long = 0;
    let lWord = '';
    
    for (let i = 0; i < res.length; i++) {
        if (long <= res[i].length) {
            long = res[i].length;
            lWord = res[i];
        }
    }
    
    return lWord;
}

console.log(findLongest('A revolution without dancing is a revolution not worth having.'));
console.log(findLongest('Which would be worse - to live as a monster, or to die as a good man?'));
