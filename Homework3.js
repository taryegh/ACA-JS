'use strict'

// 1. Printing X pattern
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





// 2. Printing frequencies of array's ellements
function printFreq(array) {
    let el = [];
    let count = [];
    let prev;

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
        console.log(`${el[j]}: ${count[j] / array.length}`);
    }

}
printFreq([1, 1, 2, 2, 3]);
printFreq([4, 4]);
printFreq([1, 2, 3]);






// 3. Print number of integers, number of strings
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






// 4. Finding the longest word within the string
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






// 5.






// 6. Moving first char to come after the next two chars
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





// 7. Array of arrays. Multiplying biggest negative number of each array
function multBiggestNeg(array) {
    let bool = true;
    let res = [];
    let prod;

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
        for (let j = 0; j < res.length; j++) {
            prod *= res[j];
        }
        return prod;
    } else {
        return 'Invalid Argument';
    }

}
console.log(multBiggestNeg([1]));




// 8. Getting all possible subsets of length 3 of the given array
function getSub3(array) {
    for (let i = 0; i < array.length; i += 3) {

    }
}
