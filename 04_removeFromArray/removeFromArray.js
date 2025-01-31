const removeFromArray = function(array, content) {
const index = array.indexOf(content)

  if (index > -1) {
  	array.splice(index, 1)
		return array
  }
  else {
  	return "Not found."
  }
};

// Do not edit below this line
module.exports = removeFromArray;
