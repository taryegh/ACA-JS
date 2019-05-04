'use strict'

// 1. A function which receives an array and a number and returns a new array with numbers greater than the given number
function greaterNumber(array, number) {
    let largeNums = [];
    array.forEach(item => {
        if (item > number) {
            largeNums.push(item);
        }
    });

    if (largeNums.length === 0) {
        return 'Such values do not exist.';
    }

    return largeNums;
}
console.log(greaterNumber([10, 25, 16, -5, 30, 15, 24], 16));
console.log(greaterNumber([1, 1, 2, -3, 0, 8, 4, 0], 9));





// 2. Finding all even digit numbers between a given range
function findEvenDigNum(start, end) {
    let strOfEvenDigs = '';

    for (let i = start; i <= end; i++) {
        let arr = [];
        let j = i;
        let numToStr = i.toString();

        while (j > 0) {
            let lastDig = j % 10;
            if (lastDig % 2 === 0) {
                arr.unshift(lastDig);
            }
            j = Math.floor(j / 10);
        }

        if (numToStr.length === arr.length) {
            strOfEvenDigs += i + ', ';
        }

    }

    if (!strOfEvenDigs) return 'Such numbers does not exist.'

    return strOfEvenDigs;
}
console.log(findEvenDigNum(19, 42));
console.log(findEvenDigNum(99, 99));





// 3. Recursive function determining digits are odd or not
function digAreOdd(n) {
    if (n == 0) return false;
    if (n == 1) return true;

    if (n > 0) {
        return digAreOdd(n - 2);
    } else {
        return digAreOdd(n + 2);
    }
}
//console.log(digAreOdd(4211133)); // !!! Maximum call stack size exceeded???
console.log(digAreOdd(7791));
console.log(digAreOdd(5));





// 3. Recursive function - digits odd or not, Another way
function digAreOdd2(num) {
    if (num < 10) {
        if (num % 2 === 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return (digAreOdd2(num % 10) && digAreOdd2(Math.floor(num / 10)))
    }
}
console.log(digAreOdd2(4211133));
console.log(digAreOdd2(7791));
console.log(digAreOdd2(5));




// 4. Recursive function to find minimum positive number in a given array
function getMinPositive(array) {
    let posArr = array.filter(item => item >= 0);
    if (posArr.length === 1 || posArr.length === 0) {
        if (posArr[0] >= 0) {
            return posArr[0];
        } else {
            return -1;
        }

    } else {
        if (posArr[0] < posArr[1]) {
            posArr.splice(1, 1);
            return getMinPositive(posArr);
        }
        posArr.splice(0, 1);
        return getMinPositive(posArr);
    }

}
console.log(getMinPositive([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(getMinPositive([45, -9, 15, 5, -78]));
console.log(getMinPositive([-5, -9, -111, -1000, -7]));






// 5. Find ascending sorting violation
function findSortViolation(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            return i;
        }
    }
    return - 1;

    // could not write this on foreach?

};
console.log(findSortViolation([2, 12, 15, 48, 64]));
console.log(findSortViolation([-9, -4, -4, 3, 12, 4, 5]));
