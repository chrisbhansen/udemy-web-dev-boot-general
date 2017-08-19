var testArray = [1,2,3,4,5,6,7,8];
var newArray = [];

// printReverse()
printArrayProblemTitle("Print Reverse");
printStartingArray();
printFinishedArray(printReverse());







// business logic functions
function printReverse() {
	for(var i = testArray.length-1; i >= 0; i--) {
		newArray.push(testArray[i]);
	}
	return newArray;
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