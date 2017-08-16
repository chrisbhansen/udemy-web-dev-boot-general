console.log("Print all numbers between -10 and 19");
var startNum = -10;
var endNum = 19
while(startNum <= endNum) {
	console.log(startNum)
	startNum++;
}

console.log("Print all even numbers between 10 and 40");
startNum = 10;
endNum = 40;

while(startNum <= endNum) {
	console.log(startNum)
	startNum+=2;
}

console.log("Print all odd numbers between 300 and 333");
startNum = 300;
endNum = 333;

while(startNum <= endNum) {
	if (startNum % 2 !== 0) {
		console.log(startNum)
	}
	startNum++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
startNum = 5;
endNum = 50;

while(startNum <= endNum) {
	if (startNum % 5 === 0 && startNum % 3 === 0) {
		console.log(startNum)
	}
	startNum++;
}