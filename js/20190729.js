/*加载函数*/
function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
/*牛客编程题测试用*/
function count(start, end) {
	//立即输出第一个值
	console.log(start++);
     var timer = setInterval(function(){
         if(start <= end){
             console.log(start++);
         }else{
             clearInterval(timer);
         }
     },100);
    //返回一个对象
     return {
         cancel : function(){
             clearInterval(timer);
         }
     };
 }

function fizzBuzz(num) {
    var a=num%3;
    var b=num%5;
    if(a==0&&b==0){
    	console.log("fizzbuzz");
        return "fizzbuzz";
    }
    if(a==0&&b!=0){
    	console.log("fizz");
        return "fizz";
    }
    if(b==0&&a!=0){
    	console.log("buzz");
        return "buzz";
    }
    if(a!=0&&b!=0){
    	console.log(num);
        return num;
    }
}

function prepare(){
//	count(2,10);
//	fizzBuzz(11);
	var a=1,b=20,c=2;
	return a,b,c;
}

addLoadEvent(prepare);