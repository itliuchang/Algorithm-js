/*如何读取一个算术表达式的字符串并且返回计算的结果值，例如：（1+3）／（3*3）*/
//方法：建立两个栈，分别存放操作符和数值
var Stack = require('./stack'),
	stackOperat = new Stack,
	stackNum =new Stack,
	str = '(1+(2+3)/5)',
	length = str.length;
for(var i=0;i<str.length;i++){
	if(str[i]=="(") continue;
	else if(str[i]=='+'||str[i]=='-'||str[i]=='*'||str[i]=='/'){
		stackOperat.push(str[i]);
	}else if(str[i]==')'){
		var op1 = stackNum.pop(),
		    op2 = stackNum.pop(),
		    op = stackOperat.pop();
		 stackNum.push(eval(op2+op+op1));
	}else{
		stackNum.push(str[i]);
	}
}
while(stackOperat.size()){
	var op1 = stackNum.pop(),
	    op2 = stackNum.pop(),
	    op = stackOperat.pop();
	 stackNum.push(eval(op2+op+op1));
}
if(stackNum.size()!=1){
	console.log('表达式有问题');
}else{
	console.log(stackNum.pop());
}