var a_numlogin=_(".numlogin");
var _phologin=_(".phologin");
var _lodings=_(".lodings");
var _num_lodings=_(".num_lodings");


	var numarray = Array.from(a_numlogin)
	numarray.forEach(function(item){
		item.addEventListener("click",numlodings);
	})
   	function numlodings(evt){
   		var e = evt || window.event;
   		_lodings.style.display="block";
   		_num_lodings.style.display="none";
   	}
 	
	var phoarray=Array.from(_phologin)
	phoarray.forEach(function(item){
		item.addEventListener("click",phologin);
	})
	function phologin(evt){ 		
 		var e = evt || window.event;
 		_num_lodings.style.display="block";
 		_lodings.style.display="none";
 	}