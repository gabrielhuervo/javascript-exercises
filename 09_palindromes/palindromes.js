const palindromes = function (string) {
	stringArray = string.split("");
	reversedStringArray = stringArray.reverse()

	if (stringArray == reversedStringArray) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;
