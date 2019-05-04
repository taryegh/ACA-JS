'use strict'



// 1. Check number is ODD or EVEN
function checkNumberOE(number) {
    if (number % 2 === 0) {
        console.log('The number is even');
    } else {
        console.log('The number is odd');
    }
}

checkNumberOE(123);
checkNumberOE(35);
checkNumberOE(70);




// 2. Divisables
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





// 3. n + nn + nnn
function addN(n) {
    console.log(parseInt(`${n}`) + parseInt(`${n}${n}`) + parseInt(`${n}${n}${n}`));

}

addN(3);
addN(17);
addN(100);




// 4. Bring LastDigit to FRONT
function bringLastDigit(n) {
    let numberSt = n.toString();

    if (numberSt[numberSt.length - 1] !== '0') {
        let lastEl = numberSt.slice(numberSt.length - 1);
        let restEl = numberSt.slice(0, numberSt.length - 1);
        let aug = parseInt((lastEl + restEl));
        console.log(aug);
    } else if (numberSt[numberSt.length - 1] === '0') {
        console.log(n);
    } else {
        console.log('please input number');
    }



}

bringLastDigit(367);
bringLastDigit(1002);
bringLastDigit(250);
bringLastDigit(8);




// 4. LastDigit - anotherway
function lastDig(num) {
    const lastDigit = num % 10;
    let numberWithoutLastD = Math.floor(num / 10);
    let str = lastDigit.toString() + numberWithoutLastD.toString();
    console.log(parseInt(str));
}

lastDig(367);
lastDig(1002);
lastDig(250);
lastDig(8);





// 5. Calculate average
function calcAvg(a1, a2, a3, a4, a5) {
    console.log((a1 + a2 + a3 + a4 + a5) / 5);
}

calcAvg(45, -12, 0, 3, -15);
calcAvg(7, 52, -23, 9, -81);




// 6. Sorting by ascending
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





// 7. Operator sign
function findSign(x, y, z) {
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

findSign(-14, 5, 0);
findSign(-8, 9, -6);
findSign(4, 19, -2);


{
    // 7. Class review
    // erb batsasakan tveri qanaky lini kent, kstananq -
    if (a===0 || b===0 || c===0){
        return 'unsigned'
    }
    let arr = [a, b, c];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            counter++;
        }
    }
    // return counter%2 ? '-' : '+';
    if (counter % 2) {
        return '+'
    } else {
        return '-'
    }
}


{

    // 7. Class review - another way
    
    function checkSign (...numbers) {
        if (numbers.indexOf(0) > - 1){
            return 'unsigned'
        }

        let counter = 0;
        for (let i = 0; i < numbers.length; i++) {
            
            if(arr[i] < 0) {
                counter++;
            }
        }
        // return counter%2 ? '-' : '+';
        if (counter % 2) {
            return '+'
        } else {
            return '-'
        }
    }

}



// 8. Quadratic equation
function calcQuad(a, b, c) {
    const D = Math.pow(b, 2) - 4 * a * c;
    if (D >= 0) {
        if (a !== 0) {

            const a1 = (-b + Math.sqrt(D)) / (2 * a);
            const a2 = (-b - Math.sqrt(D)) / (2 * a);
            if (a1 !== a2) {
                console.log(`Solutions are ${a1} and ${a2}`);
            } else {
                console.log(`Solution is ${a1}`);
            }

        } else {
            console.log('Enter valid constans');
        }
    } else {
        console.log('Solution does not exists');
    }


}

calcQuad(1, 2, 1);
calcQuad(0, 4, -5);
calcQuad(3, -8, 12);
calcQuad(5, -13, 6);




// 9. Rewriting code

let n = +prompt();

let i = 0;
let j = 0;

if (n % 2 === 0) {
    !Math.floor(n / 10) ? i += 1 : false;
}
if (n % 3 === 0) {
    n % 10 === 1 ? j += 1 : false
}




// 10. Checking digit in number
function checkDigitInNumber(dig, num) {
    let strNum = num.toString();
    let strDig = dig.toString();
    let contains;

    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] === strDig) {
            contains = 1
        }
    }
    if (contains === 1) {
        console.log('Yes')
    } else {
        console.log('No');
    }

}


checkDigitInNumber(5, 2463);
checkDigitInNumber(4, 6);
checkDigitInNumber(8, 45689);






// 10. Checking digit in number - another way
function checkDiginNum(dig, num) {
    let strNum = num.toString();
    let strDig = dig.toString();

    if (strNum.match(strDig)) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
checkDiginNum(1, 11);
checkDiginNum(4, 6);
checkDiginNum(8, 45689);




// 11. Reverse Digits
function reverseDigits(n) {
    if (n / 10 < 1) {
        console.log(n);
    } else {
        let conToStr = n.toString();
        let fEl = conToStr.slice(0, 1);
        let lEl = conToStr.slice((conToStr.length - 1) - conToStr.length);
        let mEl = conToStr.slice(1, conToStr.length - 1);
        let newEl = parseInt(lEl + mEl + fEl);
        console.log(newEl);
    }

    // frankly, couldn't find better sollution, though sure, this is not very preferable one :)
}

reverseDigits(2);
reverseDigits(13);
reverseDigits(7131135);



// 11. Reverse Digits - another way
function revDig(num) {
    if (num / 10 < 1) {
        console.log(num);
    } else {
        let numToSt = num.toString();
        let strArr = numToSt.split(",");
        let fEl = strArr[0];
        let lEl = strArr[strArr.length - 1];
        
        // end
        strArr.pop();
        strArr.push(fEl);

        // start
        strArr.shift();
        strArr.unshift(lEl);
        console.log(strArr);
        let a = strArr.join();
        console.log(parseInt(a));

    }
}

revDig(549)


{
    // Class review
    
    // 11.
    //let last = n%10
    // let first = n.toString()[0];
    // qani 10its n-y mets = a, apa, n-y bajani 10i

}



// 12. Rectangle or Triangle
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




// 13. Difference of BIGGEST and SMALLEST digits
function calcBigSmall(num) {
    let numString = num.toString();
    let numArr = numString.split('');
    console.log((Math.max(...numArr)) - (Math.min(...numArr)));
}

calcBigSmall(5);
calcBigSmall(152);
calcBigSmall(4593653);


