/*栈*/
module.exports = Stack;
function Stack(){
	var size = 0,
		data = [],
	    that = this;
	push = function(item){
		data.push(item);
		size++;
	}
	pop = function(){
		size--;
		return data.pop();
	}
	isEmpty = function(){
		return data.length ? false : true;
	}
	getSize = function(){
		return size;
	}
	return {
		push : push,
		pop : pop,
		isEmpty : isEmpty,
		size : getSize,
	}
}