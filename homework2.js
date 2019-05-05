'use strict'



// 1. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.
function isPrime(num) {
    let bool = true;
    if (num === 0 || num === 1) {
        bool = false;
    } else if (num === 2) {
        bool = true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                bool = false;
                break;
            } 
        }
    }

    if (bool) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
isPrime(401);
isPrime(63);




// 2. Given a number n ( n>= 0 ). Print nth Fibonacci number. (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)
function fibN(num) {
    let arr = [0, 1];
    
    for (let i = 2; i <= num; i++) {
        let res = arr[i - 2] + arr[i - 1];
        arr.push(res);
    }
    
    return arr[num];
}
console.log(fibN(0));
console.log(fibN(2));
console.log(fibN(10));
console.log(fibN(20));





// 2. Fibonacci Print n - RECURSION
function fibNRec(num) {
    if (num <= 1) {
        return num;
    }
    
    return fibNRec(num - 1) + fibNRec(num - 2);
}
console.log(fibNRec(0));
console.log(fibNRec(2));
console.log(fibNRec(10));
console.log(fibNRec(20));





// 3. Given a number n( n> 0 ). Print Fibonacci series up to n.
function fibSeries(num) {
    let arr = [0, 1];
    
    for (let i = 2; i <= num; i++) {
        let res = arr[i - 2] + arr[i - 1];
        
        if (res <= num) {
            arr.push(res);
        }
        
    }
    console.log(arr);
}
fibSeries(7);
fibSeries(45);





// 4. Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum, print the quotient, otherwise print the remainder.
function calcProdDig(num) {
    let sum = 0;
    let prod = 1;
    
    if (num <= 0 || num === undefined) {
        return 'Cannot calculate.';
    }
    
    while (num) {
        sum += num % 10;
        prod *= num % 10;
        num = Math.floor(num / 10);
    }
    
    if (prod % sum === 0) {
        return `Quotient is ${prod / sum}.`;
    } else {
        return `Reminder is ${prod % sum}.`;
    }
    
}
console.log(calcProdDig(1233));
console.log(calcProdDig(5));
console.log(calcProdDig(0));
console.log(calcProdDig(455));





// 4. Another Solution
function calcProdDig2(num) {
    
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
calcProdDig2(1233);
calcProdDig2(5);
calcProdDig2(0);
calcProdDig2(455);





// 9.	Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers by the given num length over the specified interval (from a to b). 
function createEvenlySpaced(a, b, num) {
    if (a <= b && num > 0) {
        let add = (b - a) / (num - 1);
        let arr = [];
        
        for (let i = a; i <= b; i = i + add) {
            arr.push(i);
        }
        console.log(arr);
    }
}
createEvenlySpaced(1, 5, 1);
createEvenlySpaced(10, 100, 3);
createEvenlySpaced(1, 5, 6);





// 10. Given an array of numbers. Find the index of the second maximum element.
function findSecondMax(array) {
    let biggest = -Infinity; let nextBiggest = -Infinity;
    
    for (let i = 0; i < array.length; i++) {
        let cur = array[i];
        
        if (cur > biggest) {
            nextBiggest = biggest;
            biggest = cur;
            
        } else if (cur < biggest && cur > nextBiggest) {
            nextBiggest = cur;
        }
    }
    
    return array.indexOf(nextBiggest);
}
console.log(findSecondMax([23, -98, 0, -456, 12, 8]));
console.log(findSecondMax([-60, 2, 43, -18, 5, -19, 36, 7, 56]));






// 11. Given an array of numbers, padding amount and repeat count. Pad the array in the following way: the padding amount specifies how many elements should be taken from the array edges, the repeat amount specifies how many times the pad should be repeated. Also, you should check that  padding amount <= length of array.
function paddingArray(array, pad, rep) {
    if (pad > array.length) {
        return 'Invalid padding amount';
    }
    
    let padedBeg = array.slice(0, pad);
    let padedFin = array.slice(array.length - pad, array.length);
    
    
    for (let i = 0; i < rep; i++) {
        array.unshift(...padedBeg);
        array.push(...padedFin);
    }
    
    return array;
}
console.log(paddingArray([1, 2, 3, 4], 1, 3));
console.log(paddingArray([1, 2, 3, 4], 2, 1));
console.log(paddingArray([1], 1, 3));
console.log(paddingArray([1], 2, 3));

