var testArray = [1,2,3,4,5,6,7,8];
var newArray = [];

// printReverse()
printArrayProblemTitle("Print Reverse");
printStartingArray();
printFinishedArray(printReverse(testArray));
printDivider();

// isUniform()
testArray = [1,1,1,1,1,1,1,1];
printArrayProblemTitle("Is Uniform");
printStartingArray();
printFinishedArray(isUniform(testArray));
printDivider();

// sumArray()
testArray = [1,2,3,4,5,6,7,8];
printArrayProblemTitle("Sum Array");
printStartingArray();
printFinishedArray(sumArray(testArray));
printDivider();

// max()
testArray = [-1,-2,-3,-4,-5,-6,-7,-8];
printArrayProblemTitle("Max Array");
printStartingArray();
printFinishedArray(max(testArray));
printDivider();

// business logic functions
function printReverse(arr) {
	for(var i = arr.length-1; i >= 0; i--) {
		newArray.push(arr[i]);
	}
	return newArray;
}

function isUniform(arr) {
	var check = arr[0];
	for(var i = 0; i < arr.length; i++) {
		if (check === arr[i]) {
			// keep going
		} else {
			return false;
		}
	}
	return true;
}

function sumArray(arr) {
	var sum = 0;
	for(var i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum;
}

function max(arr) {
	var max = Number.NEGATIVE_INFINITY;
	for(var i = 0; i < arr.length; i++) {
		if (max <= arr[i]) {
			max = arr[i];
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