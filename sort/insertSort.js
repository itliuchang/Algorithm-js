module.exports = InsertSort;
function InsertSort(arr){
	var start = new Date().getTime();
	var arr = arr instanceof Array ? arr : [],
		result = [arr[0]]; 
	if (arr.length==0||arr.length==1) return arr;
	for(var i = 1,length = arr.length;i<length;i++){
		var index = 0;
		for(var j = 0,rlength = result.length;j<rlength;j++){
			if(arr[i]>result[j]){
				index = j+1;
			}
		}
		for(;index<rlength;rlength--){
			result[rlength] = result[rlength-1];
		}
		result[index] = arr[i];
	}
	console.log(new Date().getTime()-start);
	return result;
}
var t = new InsertSort([1,2]);
console.log(t);