var testArray = [1,2,3,4,5,6,7,8];
var newArray = [];

// printReverse()
printArrayProblemTitle("Print Reverse");
printStartingArray();
printFinishedArray(printReverse());
printDivider();

// isUniform()
testArray = [1,1,1,1,1,1,1,1];
printArrayProblemTitle("Is Uniform");
printStartingArray();
printFinishedArray(isUniform());
printDivider();

// sumArray()
testArray = [1,2,3,4,5,6,7,8];
printArrayProblemTitle("Sum Array");
printStartingArray();
printFinishedArray(sumArray());
printDivider();

// max()
testArray = [-1,-2,-3,-4,-5,-6,-7,-8];
printArrayProblemTitle("Max Array");
printStartingArray();
printFinishedArray(max());
printDivider();

// business logic functions
function printReverse() {
	for(var i = testArray.length-1; i >= 0; i--) {
		newArray.push(testArray[i]);
	}
	return newArray;
}

function isUniform() {
	var check = testArray[0];
	for(var i = 0; i < testArray.length; i++) {
		if (check === testArray[i]) {
			// keep going
		} else {
			return false;
		}
	}
	return true;
}

function sumArray() {
	var sum = 0;
	for(var i = 0; i < testArray.length; i++) {
		sum = sum + testArray[i];
	}
	return sum;
}

function max() {
	var max = Number.NEGATIVE_INFINITY;
	for(var i = 0; i < testArray.length; i++) {
		if (max <= testArray[i]) {
			max = testArray[i];
		} else {
			// keep going - do nothing to "max"
		}
	}
	return max;
}

// display functions
function printArrayProblemTitle(title) {
	console.log(title);
}

function printStartingArray() {
	console.log("Starting array: " + testArray)
}

function printFinishedArray(calledFunction) {
	console.log("Finished array: " + calledFunction)
}

function printDivider() {
	console.log("********************************");
}