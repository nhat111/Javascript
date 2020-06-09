function add(a,b,callback){
	document.write(`sum ${a} and ${b} is ${a+b}`+ "</br>");
	// document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
	callback();

}
function home(){
	document.write('hello your name');
}

add(5,6,home);