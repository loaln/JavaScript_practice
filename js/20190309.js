
var ta;
var btn;

var num=0;
var txt;
var bt;

var numDiv;
var work=null;

window.onload=function(){
	ta=document.getElementById("ta");
	if(localStorage.text){
		ta.value=localStorage.text;
	}
	
	btn=document.getElementById("b1");
	btn.onclick=function(){
		localStorage.text=ta.value;
//		alert(ta.value);
	}
	
	txt=document.getElementById("n");
	bt=document.getElementById("add");
	if(sessionStorage.num){
		num=sessionStorage.num;
	}else{
		num=0;
	}
	
	bt.onclick=function(){
		num++;
		sessionStorage.num=num;
		showNum();
	}
	
	/*web worker*/
	numDiv=document.getElementById("numDiv");
	document.getElementById("start").onclick=startWorker;
	document.getElementById("stop").onclick=stopWorker;
}

function showNum(){
	txt.innerHTML=num;
}

function startWorker(){
	if(work){
		return;
	}
	work=new Worker("../js/20190309-webworker.js");
	work.onmessage=function(e){
		numDiv.innerHTML=e.data;
	}
}

function stopWorker(){
	if(work){
		work.terminate();
		work=null;
	}
}
