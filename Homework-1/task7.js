'use strict'


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





// 7. Another method
function checkSign2(a, b, c) {
    if (a === 0 || b === 0 || c === 0) {
        return 'unsigned';
    }

    let arr = [a, b, c];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count += 1;
        }
    }

    if (count % 2 === 0) {
        return '+';
    } else {
        return '-';
    }

}

console.log(checkSign2(-14, 5, 0));
console.log(checkSign2(-8, 9, -6));
console.log(checkSign2(4, 19, -2));





// 7. Another method
function checkSign3(...nums) {
    if (nums.indexOf(0) > -1) {
        return 'unsigned';
    }

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            count++;
        }
    }

    return count % 2 ? '-' : '+';
}

console.log(checkSign3(-14, 5, 0));
console.log(checkSign3(-8, 9, -6));
console.log(checkSign3(4, 19, -2));
