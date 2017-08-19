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