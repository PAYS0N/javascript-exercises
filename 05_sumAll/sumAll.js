const sumAll = function(nStart, nEnd) {
    if (nStart < 0 || nEnd < 0) {
        return 'ERROR';
    }
    if (!Number.isInteger(nStart) || !Number.isInteger(nEnd)) {
        return 'ERROR';
    }
    let nSum = 0;
    let nDiff = Math.abs(nStart - nEnd);
    for (let i = Math.min(nStart, nEnd); i < Math.min(nStart, nEnd) + 1 + nDiff; i++) {
        nSum += i;
    }
    return nSum;

};

// Do not edit below this line
module.exports = sumAll;
