cont.style.visibility = "Hidden";
words.style.visibility = "hidden";
choice.style.visibility = "hidden";
good.style.visibility = "hidden";
bad.style.visibility = "hidden";
beg.onclick = function(){
	words.style.visibility = "visible";
	cont.style.visibility = "visible";
	beg.style.visibility = "hidden";
};

cont.onclick = function(){
	choice.style.visibility = "visible";
	good.style.visibility = "visible";
	bad.style.visibility = "visible";
	cont.style.visibility = "Hidden";
}

bad.onclick = function(){
	cont.style.visibility = "Hidden";
	words.style.visibility = "hidden";
	choice.style.visibility = "hidden";
	good.style.visibility = "hidden";
	bad.style.visibility = "hidden";
	let div = document.createElement('div');
	good.style.visibility = "hidden";
	div.innerHTML = "<strong>ТАК ТОМУ И БЫТЬ</strong>";
	div.style.fontSize = '30pt' ;
	div.align = 'center';
	document.body.append(div);
}

good.onclick = function(){
	top.location.href="goodending.html";
}