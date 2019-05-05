'use strict'


// 1. Given a number. Print “odd” if the number is odd and “even” if it’s even.
function checkOdd_Even(number) {
    if (number % 2 === 0) {
        console.log('The number is even');
    } else {
        console.log('The number is odd');
    }
}
checkOdd_Even(123);
checkOdd_Even(35);
checkOdd_Even(70);



// 2. Given two numbers. Print 1 if one of them is divisible by the other one, otherwise print 0.
function checkIsDevisable(a, b) {
    if ((a % b === 0) || (b % a === 0)) {
        console.log(1);
    } else {
        console.log(0);
    }
}
checkIsDevisable(3, 14);
checkIsDevisable(18, 2);
checkIsDevisable(7, 21);





// 3. Given number ​n​ (positive integer). Print the value of ​n + nn + nnn​(not multiplication)​.
function printNs(n) {
    return parseInt(`${n}`) + parseInt(`${n}${n}`) + parseInt(`${n}${n}${n}`);

}

console.log(printNs(3));
console.log(printNs(17));
console.log(printNs(100));




// 4. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.
function bringLastDigit(n) {
    if (n < 0 || n === undefined) {
        return 'Please enter a positive number';
    }

    let numberSt = n.toString();

    if (numberSt[numberSt.length - 1] !== '0') {
        let lastEl = numberSt.slice(numberSt.length - 1);
        let restEl = numberSt.slice(0, numberSt.length - 1);
        let aug = parseInt((lastEl + restEl));
        return aug;
    } else if (numberSt[numberSt.length - 1] === '0') {
        return n;
    }
}

console.log(bringLastDigit(736));
console.log(bringLastDigit(1002));
console.log(bringLastDigit(250));
console.log(bringLastDigit(8));




// 4. Another solution
function lastDig(num) {
    if (num < 0 || num === undefined) {
        return 'Please enter a positive number';
    }

    const lastDig = num % 10;
    let rest = Math.floor(num / 10);

    return lastDig !== 0 && rest !== 0 ? parseInt(lastDig.toString() + rest.toString()) : num;
}
console.log(lastDig(367));
console.log(lastDig(1002));
console.log(lastDig(250));
console.log(lastDig(8));





// 5. Given five numbers as input. Calculate and print the average of the numbers(without using arrays).
function calcAvg(a1, a2, a3, a4, a5) {
    console.log((a1 + a2 + a3 + a4 + a5) / 5);
}

calcAvg(45, -12, 0, 3, -15);
calcAvg(7, 52, -23, 9, -81);




// 6. Given three numbers. Sort them by the ascending order
function sortNum(n1, n2, n3) {
    if (n1 < n2 & n1 < n3) {
        if (n2 <= n3) {
            console.log(n1 + ', ' + n2 + ', ' + n3);
        } else {
            console.log(n1 + ', ' + n3 + ', ' + n2)
        }
    } else if (n2 < n3 && n2 < n3) {
        if (n3 <= n1) {
            console.log(n2 + ', ' + n3 + ', ' + n1);
        } else {
            console.log(n2 + ', ' + n1 + ', ' + n3);
        }
    } else {
        if (n2 <= n3) {
            console.log(n3 + ', ' + n2 + ', ' + n1);
        } else {
            console.log(n3 + ', ' + n1 + ', ' + n2);
        }
    }

    //let arr = [n1, n2, n3];
    //console.log(arr.sort(function (a, b) { return a - b }));
}

sortNum(45, 26, 78);
sortNum(-23, -456, 0);





// 6 - Another solution
function sortNum2(n1, n2, n3) {
    let arr = [n1, n2, n3];
    return arr.sort((a, b) => a - b);
}
console.log(sortNum2(45, 26, 78));
console.log(sortNum2(-23, -456, 0));





// 6 - Another Solution
function sortNum3(...array) {
    let init = array.slice();
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let x = Math.min(...init);
        arr.push(x);
        init.splice(init.indexOf(x), 1);
    }
    return arr;
}
console.log(sortNum3(45, 26, 78));
console.log(sortNum3(-23, -456, 0));





// 7. Find the sign of product of three numbers ​without ​multiplication operator. Display the specified sign.
function checkSign(x, y, z) {
    if (x > 0 && y > 0 && z > 0) {
        console.log('+')
    } else if (x < 0 && y < 0 & z < 0) {
        console.log('+');
    } else if (x > 0 && y < 0 && z < 0) {
        console.log('+');
    } else if (x < 0 && y < 0 && z > 0) {
        console.log('+');
    } else if (x < 0 && y > 0 && z < 0) {
        console.log('+');
    } else if (x === 0 || y === 0 || z === 0) {
        console.log('unsigned');
    } else {
        console.log('-');
    }
}

checkSign(-14, 5, 0);
checkSign(-8, 9, -6);
checkSign(4, 19, -2);





// 7. Another way
function checkSign2(a, b, c) {
    if (a === 0 || b === 0 || c === 0) {
        return 'unsigned';
    }

    let arr = [a, b, c];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            counter += 1;
        }
    }

    if (counter % 2 === 0) {
        return '+';
    } else {
        return '-';
    }

}
console.log(checkSign2(-14, 5, 0));
console.log(checkSign2(-8, 9, -6));
console.log(checkSign2(4, 19, -2));





// 7. Another solution
function checkSign3(...numbers) {
    if (numbers.indexOf(0) > -1) {
        return 'unsigned';
    }

    let counter = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            counter++;
        }
    }

    return counter % 2 ? '-' : '+';
}
console.log(checkSign3(-14, 5, 0));
console.log(checkSign3(-8, 9, -6));
console.log(checkSign3(4, 19, -2));






// 8. Input three numbers ​a,​ ​b,​ ​c​ respectively, where a is a non zero number and write a program to solve quadratic equations: ax^2 + bx + c = 0 . ​(Hint: use Math.pow or Math.sqrt)​.
function calcQuad(a, b, c) {
    const D = Math.pow(b, 2) - 4 * a * c;
    if (D >= 0) {
        if (a !== 0) {

            const a1 = (-b + Math.sqrt(D)) / (2 * a);
            const a2 = (-b - Math.sqrt(D)) / (2 * a);
            if (a1 !== a2) {
                return `Solutions are ${a1} and ${a2}`;
            } else {
                return `Solution is ${a1}`;
            }

        } else {
            return 'Enter valid constans';
        }
    } else {
        return 'Solution does not exists';
    }


}
console.log(calcQuad(1, 2, 1));
console.log(calcQuad(0, 4, -5));
console.log(calcQuad(3, -8, 12));
console.log(calcQuad(5, -13, 6));





// 9. Given the following code rewrite it using only two ​if ​operators. (​Hint: ​use logical operators).
function rewriteCode() {
    let n = +prompt();

    let i = 0;
    let j = 0;

    if (n % 2 === 0) {
        !Math.floor(n / 10) ? i += 1 : false;
    }
    if (n % 3 === 0) {
        n % 10 === 1 ? j += 1 : false
    }
}
rewriteCode();





// 10. Insert a digit and a number. Check whether the digits contains in the number or not.
function checkDigitInNumber(dig, num) {
    let strNum = num.toString();
    let strDig = dig.toString();
    let contains = 0;

    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] === strDig) {
            contains++;
        }
    }
    if (contains > 0) {
        console.log('Yes')
    } else {
        console.log('No');
    }

}


checkDigitInNumber(5, 2463);
checkDigitInNumber(4, 6);
checkDigitInNumber(8, 45689);






// 10. Another solution
function checkDigitInNumber2(dig, num) {
    let strNum = num.toString();
    let strDig = dig.toString();

    if (strNum.match(strDig)) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
checkDigitInNumber2(1, 11);
checkDigitInNumber2(4, 6);
checkDigitInNumber2(8, 45689);




// 11. Enter a number. Reverse its first and last digits. Print the new number.
function reverseDigits(n) {
    if (n / 10 < 1) {
        console.log(n);
    } else {
        let numToStr = n.toString();
        let fEl = numToStr.slice(0, 1);
        let lEl = numToStr.slice((numToStr.length - 1) - numToStr.length);
        let mEl = numToStr.slice(1, numToStr.length - 1);
        let newEl = parseInt(lEl + mEl + fEl);
        console.log(newEl);
    }

}

reverseDigits(2);
reverseDigits(13);
reverseDigits(7131135);






// 12. Write a program which will compute the area of a rectangular or a triangle after prompting the user to type the name of the figure name. Also check that entered numbers are positive. For the triangle entered numbers are height and and base.
function calcRecORTriang(type, height, base) {
    type = prompt();
    let area;

    if (height <= 0 || base <= 0) {
        console.log('Please enter only positives');
    } else {
        if (type === 'triangle') {
            console.log(`Area of triangle is ${(height * base * 0.5)}`);
        } else if (type = 'rectangle') {
            console.log(`Area of rectangle is ${(height * base)}`);
        } else {
            console.log('please enter either rectangle or triangle')
        }
    }


}

calcRecORTriang('triangle', 6, 7);
calcRecORTriang('rectangle', 8, 5);
calcRecORTriang('triangle', 0, 5);




// 13. (***) Enter a number. Find the difference between its biggest and smallest digits.
function calcBigSmall(num) {
    let numString = num.toString();
    let numArr = numString.split('');
    console.log((Math.max(...numArr)) - (Math.min(...numArr)));
}

calcBigSmall(5);
calcBigSmall(152);
calcBigSmall(4593653);





// 13. Another way
function calcBigSmall2(num) {
    let arr = [];
    while (num > 0) {
        let el = num % 10;
        arr.unshift(el);
        num = Math.floor(num / 10);
    }
    

    let biggest = -Infinity;
    let smallest = +Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    
    return biggest - smallest;
}
console.log(calcBigSmall2(5));
console.log(calcBigSmall2(152));
console.log(calcBigSmall2(4593653));
