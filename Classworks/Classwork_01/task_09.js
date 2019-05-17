'use strict'


// 9. Given any number between 1 and 12. Print the name of the respective month.

function printMonth(n) {
    switch (n) {
        case 1:
            return 'January';
            break;
        case 2:
            return 'February';
            break;
        case 3:
            return 'March';
            break;
        case 4:
            return 'April';
            break;
        case 5:
            return 'May';
            break;
        case 6:
            return 'June';
            break;
        case 7:
            return 'July';
            break;
        case 8:
            return 'August';
            break;
        case 9:
            return 'September';
            break;
        case 10:
            return 'October';
            break;
        case 11:
            return 'November';
            break;
        case 12:
            return 'December';
            break;
        default:
            return 'Please enter number from 1 to 12.';
            break;
    }
}

console.log(printMonth(2));
console.log(printMonth(4));
console.log(printMonth(11));
