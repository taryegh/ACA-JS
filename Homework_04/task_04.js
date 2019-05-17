'use strict'


// 4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1).

function getMinPos(arr) {
    let posArr = arr.filter(el => el >= 0);
    if (posArr.length === 1 || posArr.length === 0) {
        return posArr[0] >= 0 ? posArr[0] : -1;

    } else {
        if (posArr[0] < posArr[1]) {
            posArr.splice(1, 1);
            return getMinPos(posArr);
        }
        posArr.splice(0, 1);
        return getMinPos(posArr);
    }
    
}

console.log(getMinPos([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(getMinPos([45, -9, 15, 5, -78]));
console.log(getMinPos([-5, -9, -111, -1000, -7]));
