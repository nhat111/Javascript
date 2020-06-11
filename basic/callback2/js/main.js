function add (a,b ,callback){
	document.write(`sum ${a} + ${b} is ${a+b}`+"</br>");
	callback();
}

// add() function is called with arguments given below 
/*   add(5,6,function disp(){ 
   document.write('This must be printed after addition.'); 
   });*/ 
     
/*add(5,10, function disp()){
	 document.write('This must be printed after addition.'); 
}*/

add(4,7,function disp(){
	 document.write('This must be printed after addition.'); 
});
