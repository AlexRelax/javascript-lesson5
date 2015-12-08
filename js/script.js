function createArray(n){
	var arr = new Array(n);
	for (var i = 0; i < n; i++) {
		arr[i] = new Array(n);
		for (var j = 0; j < n; j++) {
			arr[i][j] = (i * n + j + 1);
		}
	}
	return arr;
}

function printArray(arr){
	var row;
	for (var i = 0; i < arr.length; i++) {
		row = "";
		for (var j = 0; j < arr[i].length; j++) {
			row += "\t" + arr[i][j];
		}
		console.log(row);
	}
}

var mas = createArray(10);
printArray(mas);