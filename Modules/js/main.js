function  Rectangle() {
	var leng;
	var wid;

	function create(l, w){
		leng = l;
		wid = w;
	}

	function getArea(){
		return (leng * wid);
	}

	function getPerimeter() {
		return  (2 * ( leng + wtd)) ;
	}

	/*var publicAPI = {

		create: create,
		getArea: getArea,
		getPerimeter:getPerimeter

	};

	return publicAPI;*/
}
var myRect = Rectangle();// Person p = new Person();
myRect.create(3, 4);

document.write(myRect.getArea());

