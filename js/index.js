var _top=_(".top-container")
var header_warp=_(".header-warp")
var header_logo=_(".header-logo")
var nav_container=_(".nav-container")

window.addEventListener("scroll",showtop);
function showtop(){
	var th=header_warp.offsetHeight+header_logo.offsetHeight+nav_container.offsetHeight;
	var st=document.body.scrollTop || document.documentElement.scrollTop;
	if(st>=th){
		_top.style.display="block";
	}else{
		_top.style.display="none";
	}
}

var mySwiper = new Swiper ('.swiper-container', {  
    loop: true,
    autoplay:true,
    pagination: {
      el: '.swiper-pagination',
       clickable :true,
    },       
  }) 
  

 
	 
	var _inner = _(".inner")
	function fn(data){
		var xinlist = data.goods.xin.list
		console.log(xinlist);
		function newinner(){
			console.log(1)
			var html = ""
			xinlist.forEach((item)=>{
				html+=		`<div class="product">
					<p>
						<img src="${item.img}">
					</p>
					<p>
						<img src="${item.logo}">
					</p>
					<p class="introduce"> ${item.slogan}</p>
					<p class="price">${item.price}</p>
							</div>`
			})
			_inner.innerHTML = html
		}
		newinner();
	}
 var begin_loding = _(".begin-loding");
 var begin_register = _(".begin-register");
 var first_page=_(".first-page");	
 	console.log(first_page);
 	begin_loding.addEventListener("click",lodings);
 	function lodings(evt){
 		var e = evt || window.event;
 		open("../html/loding.html");
 	}
 	
 	begin_register.addEventListener("click",registers);
 	function registers(evt){
 		var e = evt || window.event;
 		open("../html/register.html");
 	}
    
	first_page.addEventListener("click",firsts);
 	function firsts(evt){
 		var e = evt || window.event;
 		open("index.html");
 	}
 	
//百度搜索
	var search=document.getElementById("search_box");
	var wrop=document.getElementById("wrop");
	search.addEventListener("input",searchshow);
	var showNum=4;
	var timer=null;
		
function searchshow(){
                  if(timer  !==  null){                      
                        return false;
                  }
                  timer = setTimeout(function (){                       
                        var url = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${search.value}&json=1&p=3&sid=1422_21089_28131_26350_28266&req=2&csor=2`;

                        jsonp(url,"cb")
                        .then(function(res){
                              
                              var html = "";
                              res.s.every((item,index)=>{

                                    html += `<li>${item}</li>`
                                    return index < showNum;
                              })
                              wrop.innerHTML = html;
                        })
                        timer = null;
                  },100)
            }

           