/*栈*/
module.exports = Stack;
module.exports = StackList;
var Node = require('./node');
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

function StackList(){
	var size = 0,
		first = new Node;
	push = function(item){
		if(!first.item){
			first.item = item;
			size++;
		}else{
			var tem = first;
			first = new Node(item);
			first.next = tem;
			size++;
		}
	}
	pop = function(){
		if(!size){
			return '栈为空';
		}else{
			var item = first.item;
			first = first.next;
			size--;
		}
	}
	getSize = function(){
		return size;
	}
	isEmpty = function(){
		return size==0;
	}
	traversal = function (){ //遍历栈中的节点
		var test = first;
		for(var i=0;i<size;i++){
			console.log(test.item+'\n');
			test = test.next;
		}
	}
	return {
		push : push,
		pop : pop,
		size : getSize,
		isEmpty : isEmpty,
		traversal : traversal,
	}
}