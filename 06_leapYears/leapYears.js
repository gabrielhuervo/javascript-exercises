const leapYears = function(year) {
	if(year % 4 === 0){
		if(year % 100 === 0){
			if(year % 400 === 0){
				return true; // Year is divisible by 400, so it's a leap year
			}else{
				return false; // Year is divisible by 100 but not by 400, so it's not a leap year
			}
		}else{
			return true; // Year is divisible by 4 but not by 100, so it's a leap year
		}
	}else{
		return false; // Year is not divisible by 4, so it's not a leap year
	}
};

// Do not edit below this line
module.exports = leapYears;
