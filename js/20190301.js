$(document).ready(function(){
	
/*交互*/
	//按钮效果
	$("#btindex").button();
	//拖拽
	$("#div1").draggable();
	//放置
	$("#div2").draggable();
	$("#div3").droppable();
	$("#div3").on("drop",function(event,ui){
		$("#div3").text("框框被放入东西啦~");
	});
	//尺寸可拖动
	$("#div4").resizable();
	//选项
	$("#ask").button();
	$("#select").selectable();
	$("#ask").on("click",function(){
		if($("#right").hasClass("ui-selected")){
			alert("恭喜你答对了！");
		}else{
			alert("很遗憾，答错了！");
		}
	});
	//拖拽分类
	$("#sort").sortable();
	
/*控件*/
	//手风琴折叠效果
	$("#div5").accordion();
	//自动补充、提示
	var autotags=["laolin","lao","lin","loaln"];
	$("#tags").autocomplete({
		source:autotags
	});
	//日期选择
	$("#date").datepicker();
	//对话框
	$("#bt9").on("click",function(){
		$("#div6").dialog();
	})
	//进度条
	$("#progressbar1").progressbar({
  		value: false
	});
	var pr;
	var d=0;
	pr=$("#progressbar2");
	pr.progressbar({max: 100});
	setInterval(changepr,100);
	function changepr(){
		d++;
		//console.log(d);
		if(d>=100){
			d=0;
		}
		pr.progressbar("option","value",d);
	}
	//菜单
	$("#menu").menu();
	//滑动
	$("#slider").slider({
		slide: function(event,ui){
			$("#num").text($("#slider").slider("option","value"));
		}
	});
	//数字切换
	$("#input").spinner();
	//切换
	$("#tabs").tabs();
	
});

	