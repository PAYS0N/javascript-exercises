const removeFromArray = function() {
    let arrInitial = arguments[0];
    let arrFinal = [];
    for (let i = 0; i < arrInitial.length; i++) {
        let bInList = false;
        for (let j = 1; j < arguments.length; j++) {
            if (arrInitial[i] === arguments[j]) {
                bInList = true;
                break;
            }
        }
        if (bInList !== true) {
            arrFinal.push(arrInitial[i]);
        }
    }
    return arrFinal;
};

// Do not edit below this line
module.exports = removeFromArray;
