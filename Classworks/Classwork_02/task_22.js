'use strict'


// 22. Write a program which will give you all of the potential combinations of a two-digit decimal combination, printed in a comma delimited format ‘00’, ‘01’, ‘02’, …, ‘98’, ‘99’

function getComb() {
    let res = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            res += `${i}${j}, `;
        }
    }
    
    return res;
}

console.log(getComb());
