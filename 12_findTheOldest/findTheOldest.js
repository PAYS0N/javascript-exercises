const findTheOldest = function(aPeople) {
    aPeople.sort((prevPerson, currPerson) => {
        if (prevPerson.yearOfDeath === undefined) {
            prevYear = new Date().getFullYear();
        }
        else {
            prevYear = prevPerson.yearOfDeath;
        }
        if (currPerson.yearOfDeath === undefined) {
            currYear = new Date().getFullYear();
        }
        else {
            currYear = currPerson.yearOfDeath;
        }
        return ((currYear - currPerson.yearOfBirth)-(prevYear - prevPerson.yearOfBirth))
    })
    return aPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
