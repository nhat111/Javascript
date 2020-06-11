var a = "Global";
function myFunc(){
	console.log(this.a);
}
var myObj1 = {
	a: "myObj1",
	myFunc:myFunc
};

myFunc();
myObj1.myFunc();