'use strict'

// 1. Write a program to print X star pattern series using loop.
function printXpattern(num) {
    let res = '';
    for (let i = 0; i < num; i++) {

        for (let j = 0; j < num; j++) {

            if (i === j || num - i - 1 === j) {
                res += '* ';
            } else {
                res += '  ';
            }

        }
        res += '\n'
    }
    return res;

}
console.log(printXpattern(7));







// 2. Given an array of numbers. Print frequency of each unique number. (Frequency is the count of particular element divided by the count of all elements)
function printFreq(array) {
    let el = [];
    let count = [];
    let prev;
    let res = [];

    array.sort();
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== prev) {
            el.push(array[i]);
            count.push(1);
        } else {
            count[count.length - 1]++;
        }
        prev = array[i];
    }


    for (let j = 0; j < count.length; j++) {
        res.push(`${el[j]}: ${count[j] / array.length}`);
    }
    return res;
}
console.log(printFreq([1, 1, 2, 2, 3]));
console.log(printFreq([4, 4]));
console.log(printFreq([1, 2, 3]));







// 3. Given an array of strings and numbers. Print the number of integers and the number of strings in the array.
function printIntStr(array) {
    let numCount = 0;
    let strCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            numCount += 1;
        } else if (typeof array[i] === 'string') {
            strCount += 1;
        }
    }
    return `Numbers: ${numCount}, Strings: ${strCount}`;
}
console.log(printIntStr([1, '10', 'hi', 2, 3]));
console.log(printIntStr([1, 4, 'i am a string', '456']));






// 4. Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string. If there are several words which are the longest ones, print the last word(words can be separated by space, comma or hyphen).
function findLongest(string) {
    let res = string.split(/[ ,.-]+/);
    let longest = 0;
    let theLongestWord = '';

    for (let i = 0; i < res.length; i++) {
        if (longest <= res[i].length) {
            longest = res[i].length;
            theLongestWord = res[i];
        }
    }

    return theLongestWord;
}
console.log(findLongest('A revolution without dancing is a revolution not worth having.'));
console.log(findLongest('Which would be worse - to live as a monster, or to die as a good man?'));






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








// 6. Write a function to compute a new string from the given one by moving the first char to come after the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.
function moveChar(string) {
    let res = '';
    for (let i = 0; i < string.length; i += 3) {

        res = res + string.substring(i + 1, i + 3) + string.charAt(i);
        // res = res + string.charAt(i + 1) + string.charAt(i + 2) + string.charAt(i)
    }
    return res;
}
console.log(moveChar('dfgjkloyp'));
console.log(moveChar('aweyoolp'));





// 7. Write a function, which receives an array as an argument which elements arrays of numbers. Find biggest negative number of each array. Return product of that numbers.If there is not any negative number in an array, ignore that one. Check that items of the given array are arrays.
function multBiggestNeg(array) {
    let bool = true;
    let res = [];
    let prod = 1;

    for (let i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i]) || !array[i].length) {
            bool = false;
        }

        for (let j = 0; j < array[i].length; j++) {
            array[i].sort((a, b) => b - a);
            if (array[i][j] < 0) {
                res.push(array[i][j]);
                break;
            }

        }
    }

    if (bool) {

        if (res.length === 0) {
            return 'No negatives';
        }

        for (let j = 0; j < res.length; j++) {
            prod *= res[j];
        }
        return prod;

    } else {
        return 'Invalid Argument';

    }

}
console.log(multBiggestNeg([[2, -9, -3, 0], [1, 2], [-4, -11, 0]]));
console.log(multBiggestNeg([[3, 4], [11, 0], [5, 6, 7, 8]]));
console.log(multBiggestNeg([1, 2, 3]));





// 8. Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all elements in the array are unique.
