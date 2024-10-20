const palindromes = function (strToTest) {
    strToTest = strToTest.toLowerCase();
    aToTest = strToTest.split('');
    aCharsOnly = aToTest.filter( (char) => {
        if (char === '!' | char === '.' | char === ',' | char === ' ') {
            return false;
        } 
        else {
            return true;
        }
    })
    aReversed = []
    for (let i = aCharsOnly.length - 1; i >= 0; i--) {
        aReversed.push(aCharsOnly[i]);
    }
    bValid = true;
    for (let i = 0; i < aCharsOnly.length; i++) {
        if (aCharsOnly[i] != aReversed[i]){
            bValid = false;
        }
    }
    return bValid;
};

// Do not edit below this line
module.exports = palindromes;
