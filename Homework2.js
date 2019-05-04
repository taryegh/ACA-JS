'use strict'

// 1. Prime
function isPrime(num) {
    let bool;
    if (num === 1) {
        bool = false;
    } else if (num === 0) {
        bool = false;
    } else if (num === 2) {
        bool = true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                bool = false;

                break;
            } else {
                bool = true;
            }
        }
    }

    if (bool) {
        console.log('yes');
    } else {
        console.log('no');
    }

}
isPrime(-7);
isPrime(63);





// 2. Fibonacci Print n
function fibN(num) {
    let arr = [0, 1];

    for (let i = 2; i <= num; i++) {
        let res = arr[i - 2] + arr[i - 1];
        arr.push(res);
    }

    console.log(arr[num]);
}
fibN(0);
fibN(2);
fibN(10);
fibN(20);





// 2. Fibonacci Print n - RECURSION
function fibNRec(num) {
    if (num <= 1) {
        return num;
    }

    // QUESTION
    // how to print the returned value to the console. I want to console.log it here- inside the function.
    return fibNRec(num - 1) + fibNRec(num - 2);
}
fibNRec(0);
fibNRec(2);
fibNRec(10);
fibNRec(20);





// 3. Fibonacci Print Serries
function fibSeries(num) {
    let arr = [0, 1];

    for (let i = 2; i <= num; i++) {
        let res = arr[i - 2] + arr[i - 1];

        if (res <= num) {
            arr.push(res);
        }

    }

    console.log(arr);

    // QUESTION
    // Is it possible to write this with RECURSION?

}
fibSeries(7);
fibSeries(45);





// 4. Calculate Product and Sum of Digits
function prodDig(num) {
    let sum = 0;
    let prod = 1;

    if (num <= 0 || num === undefined) {
        console.log('Cannot calculate.');
        return

    }

    while (num) {
        sum += num % 10;
        prod *= num % 10;
        num = Math.floor(num / 10);
    }

    if (prod % sum === 0) {
        console.log(`Quotient is ${prod / sum}.`);
    } else {
        console.log(`Reminder is ${prod % sum}.`);
    }

}
prodDig(1233);
prodDig(5);
prodDig(0);
prodDig(455);





// 4. Calculate Product and Sum of Digits - Strings
function prodDigSt(num) {

    if (num <= 0 || num === undefined) {
        console.log('Cannot calculate.');
        return

    }

    let numToSt = num.toString();
    let sum = 0; let prod = 1;

    for (let i = 0; i < numToSt.length; i++) {
        sum = sum + parseInt(numToSt[i]);
        prod = prod * parseInt(numToSt[i]);
    }

    if (prod % sum === 0) {
        console.log(`Quotient is ${prod / sum}.`);
    } else {
        console.log(`Reminder is ${prod % sum}.`);
    }

}
prodDigSt(1233);
prodDigSt(5);
prodDigSt(0);
prodDigSt(455);





// 9. Evenly spaced intervals
function evenlySpaced(a, b, num) {
    if (a <= b && num > 0) {
        let add = (b - a) / (num - 1);
        let arr = [];

        for (let i = a; i <= b; i = i + add) {
            arr.push(i);
        }
        console.log(arr);
    }
}
evenlySpaced(1, 5, 1);
evenlySpaced(10, 100, 3);
evenlySpaced(1, 5, 6);





// 10. Second maximum element
function findSecondMax(array) {
    let biggest = -Infinity; let nextBiggest = -Infinity;

    for (let i = 0; i < array.length; i++) {
        let nextEl = array[i];

        if (nextEl > biggest) {
            nextBiggest = biggest;
            biggest = nextEl;

        } else if (nextEl < biggest && nextEl > nextBiggest) {
            nextBiggest = nextEl;
        }
    }

    console.log(array.indexOf(nextBiggest));
}
findSecondMax([23, -98, 0, -456, 12, 8]);
findSecondMax([-60, 2, 43, -18, 5, -19, 36, 7, 56]);






// 11. Padding an Array
function paddingArray(array, pad, rep) {
    let padedBeg = array.slice(0, pad)
    let padedFin = array.slice(array.length - pad, array.length);

    if (pad > array.length) {
        console.log('Invalid padding amount');
        return;
    }

    for (let i = 0; i < rep; i++) {
        array.unshift(...padedBeg);
        array.push(...padedFin);
    }

    console.log(array);
}
paddingArray([1, 2, 3, 4], 1, 3);
paddingArray([1, 2, 3, 4], 2, 1);
paddingArray([1], 1, 3);
paddingArray([1], 2, 3);
