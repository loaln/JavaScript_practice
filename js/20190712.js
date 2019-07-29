/*图片库初版本*/
//function showPic(whichpic) {
//	//图片切换
//	var source = whichpic.getAttribute("href");
//	var placeholder = document.getElementById("placeholder");
//	placeholder.setAttribute("src", source);
//	//文本切换
//	var txt = whichpic.getAttribute("title");;
//	var description = document.getElementById("description");
//	description.firstChild.nodeValue = txt;
//}

/*--------------*/

/*图片库改进*/
function prepareGallery() {
	if(!document.getElementsByTagName) return false; //向后兼容
	if(!document.getElementById) return false; //向后兼容
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return showPic(this) ? false : true;
		}
	}
}

function showPic(whichpic) {
	if(!document.getElementById("placeholder")) return false;
	//图片切换
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src", source);
	//文本切换
	if(document.getElementById("description")) {
		var txt = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		var description = document.getElementById("description");
		if(description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = txt;
		}
	}
	return true;
}


function addLoadEvent(func) {
	var oldonload = window.onload; //将现有的事件处理函数的值存入变量中
	if(typeof window.onload != 'function') {
		window.onload = func; //如果这个事件处理函数没有绑定任何函数，就把新函数添加给它
	} else {
		window.onload = function() {
			onload();
			func(); //如果已经绑定了函数，就把新函数追加到现有指令的末尾
		}
	}
}



addLoadEvent(prepareGallery);