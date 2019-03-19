
/*用于处理繁杂任务的子线程*/

var countNum=0;

function count(){
	postMessage(countNum);
	countNum++;
	setTimeout(count,1000);
}

count();
