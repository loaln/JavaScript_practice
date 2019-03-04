$(document).ready(function(){
	
	$("#bt1").click(function(){
		$("#demo1").append("使用append，在之后添加、");
	});
	$("#bt2").click(function(){
		$("#demo1").prepend("使用prepend，在之前添加；");
	});
	$("#bt3").click(function(){
		$("#demo1").before("使用before，在之前添加/");
	});
	$("#bt4").click(function(){
		$("#demo1").after("使用after，在之后添加·");
	});
	$("#bt5").click(function(){
		$("#demo2").hide(1000,function(){
			alert("动画结束，此方法被回调。")
		});
	});
	$("#bt6").click(function(){
		$("#demo3").text("等待……");
		$("#demo3").load("20190105-1.htm",function(a,status,c){
			alert("检测等待加载……");
			console.log(status);
			if(status=="error"){
				 $("#demo3").text("加载失败。");
			}
		});
	});
	$("#bt7").click(function(){
		$.myjq();
	});
	$("#bt8").click(function(){
		$("#demo4").myjq();
	});
});


