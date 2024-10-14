const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR';
    }
    strFull = '';
    for (let i = 0; i < num; i++) {
        strFull = strFull + str;
    }
    return strFull;
};

// Do not edit below this line
module.exports = repeatString;
