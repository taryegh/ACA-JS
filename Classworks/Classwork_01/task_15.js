'use strict'


// 15. Given a number. Determine whether it consists of 2 digits and whether the first digit is greater than the second one. Print “yes” if it is, otherwise print “no”.

function findDig(n) {
    if (n >= 10 && n <= 99) {
        let lEl = n % 10;
        n = Math.floor(n / 10);
        let fEl = n % 10;

        if (fEl > lEl) {
            return 'Yes';
        } else {
            return 'No'
        }
    } else {
        return 'No';
    }
}

console.log(findDig(12));
console.log(findDig(0));
console.log(findDig(86));
