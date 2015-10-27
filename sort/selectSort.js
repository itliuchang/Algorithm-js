module.exports = SelectSort;
function SelectSort(arr){
	var start = new Date().getTime();
	var arr = arr instanceof Array ? arr : [];
	for(var i=0,length = arr.length;i<length;i++){
		var min = arr[i],
			index = i;
		for(var j = i;j<length;j++){
			if(arr[j]<min){
				min = arr[j];
				index = j;
			}
		}
		arr[index] = arr[i];
		arr[i] = min;
	}
	console.log(new Date().getTime()-start);
	return arr;
}
var a = new SelectSort([12,32,12,32,22,11,45]);
console.log(a);