module.exports = Queue;
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
