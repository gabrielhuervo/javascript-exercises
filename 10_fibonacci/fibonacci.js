const fibonacci = function(index) {
	index = parseInt(index)
	if (isNaN(index) || index < 1){
		return "Insert a valid number.";
	} else {
		let firstPrev = 1;
	    let secondPrev = 0;

	    for (let i = 2; i <= index; i++) {
	        let current = firstPrev + secondPrev;
	        secondPrev = firstPrev;
	        firstPrev = current;
	    }

	    return firstPrev;
	}
};

// Do not edit below this line
module.exports = fibonacci;
