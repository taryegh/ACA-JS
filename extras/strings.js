'use strings'


// ------------- Task 1 -----------
// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

function ucFirst(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
console.log(ucFirst('text'));





// ------------- Task 2 -----------
// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise `false.

function checkSpam(str) {
    let lowStr = str.toLowerCase();
    return lowStr.includes('viagra') || lowStr.includes('xxx') ? true : false;
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxXXxx'));
console.log(checkSpam('innocent rabbit'));






// ------------- Task 3 -----------
// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number. Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

function extractCurrencyValue(str) {
    return +str.slice(1);
}
console.log(extractCurrencyValue('$120'));
