/*
use let to set local variable when declare inside function()
 if withow set defaul global even it declare inside function()
 inside function access  global variable
 outside  function can't user global variables
*/ 
let globalLet = "this is global";

function fun() {
let localLet_2 = "this is global"// local variable
localLet_1 ="this is global";	// global variable
console.log(globalLet)// no error

}
fun();
console.log(localLet_1);// no error
console.log(localLet_2);// error

//soure https://www.geeksforgeeks.org/

