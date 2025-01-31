const leapYears = function(year) {
    // Check if the year is a leap year using a single if statement
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // It's a leap year
    } else {
        return false; // It's not a leap year
    }
};

// Do not edit below this line
module.exports = leapYears;
