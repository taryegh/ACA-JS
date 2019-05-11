// 3. Convert a long phrase to its acronym.
function convertAcronym(string) {
    let acr = '';
    for (let i = 0; i < string.length; i++) {
        if (i === 0) {
            acr += (string[0].toUpperCase());
        }
        if (string[i] === ' ' && string[i + 1]) {
            acr += string[i + 1].toUpperCase();
        }

        
    }
    return acr;
}
console.log(convertAcronym('Prisoner of War'));
console.log(convertAcronym('Have a good night'));
