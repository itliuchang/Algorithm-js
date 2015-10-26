module.exports = Bag;
function Bag(){
	var size = 0,
		data = [];
	add = function(item){
		data.push(item);
		size++;
	}
	isEmpty = function(){
		return data.length ? false : true;
	}
	getSize = function (){
		return size;
	}
	return {
		add : add,
		isEmpty : isEmpty,
		size : getSize,
	}
}