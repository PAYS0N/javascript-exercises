const reverseString = function(str) {
    strReverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        strReverse += str[i];
    }
    return strReverse;
};

// Do not edit below this line
module.exports = reverseString;
