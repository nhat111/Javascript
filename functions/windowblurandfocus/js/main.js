var widow ;
var url = "https://www.geeksforgeeks.org";
var propary = "with='100',height = '100'";

function windownOpen(){
	window = window.open(url,"_blank",propary);
}

function windownBlur(){
	window = window.blur();
}

function windownFocus(){
	window = window.focus();
}

function indownClose(){
	window = window.close();
}