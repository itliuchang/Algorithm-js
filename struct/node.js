module.exports = Node;
function Node(item){
	var item = item ? item : null,
		next = null;
	return {
		item : item,
		next : next,
	}
}
