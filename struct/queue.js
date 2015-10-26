module.exports.Queue = Queue;
module.exports.QueueList = QueueList;
var Node = require('./node');
function Queue(){
	var data = [],
		front = 0,
		size = 0,
		rear = 0;
	enqueue = function(item){
		data.push(item);
		size++;
		rear++;
	}
	dequeue = function(){
		data[front] = null;
		size--;
		front++;
	}
	isEmpty = function(){
		return size ? false : true;
	}
	getSize = function(){
		return size;
	}
	return {
		enqueue : enqueue,
		dequeue : dequeue,
		isEmpty : isEmpty,
		size    : getSize,
	}
}
function QueueList(){
	var size = 0,
		first = new Node,
		last;
	enqueue = function(item){
		if(!first.item){  //判断队首是否有值
			first.item = item;
			first.next = null;
			last = first;
			size++;
		}else{
			var node = new Node(item);
			if(!first.next){
				first.next = node;
			}
			last.next = node;
			last = node;
			size++;
		}
	}
	dequeue = function(){
		if(!size) return 0;//判断队列中是否还有节点
		else{
			var result = first; 
			first = first.next ? first.next : new Node;
			size--;
			return result;
		}
	}
	getSize = function(){
		return size;
	}
	isEmpty = function(){
		return size == 0;
	}
	return {
		enqueue : enqueue,
		dequeue : dequeue,
		size : getSize,
		isEmpty : isEmpty,
	}
}

var q = new QueueList;
q.enqueue('liu');
console.log(q.size());
q.enqueue('chang');
console.log(q.size());
console.log(q.dequeue());
console.log(q.size());
console.log(q.dequeue());
console.log(q.size());
console.log(q.isEmpty());

