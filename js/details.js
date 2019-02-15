var focus = document.querySelector(".focus");
	 
	 var big_pic=document.querySelector(".big-pic");
	 var magnifier_m=document.querySelector(".magnifier-m");
 
	var big_bg = big_pic.children[0];
	var small_bg = magnifier_m.children[0];
	
	var magnifier_l = document.querySelector(".magnifier-l");
    var l_items = magnifier_l.children;
    
	var prop = parseInt(getComputedStyle(big_pic)["width"]) / parseInt(getComputedStyle(focus)["width"]);
	
	big_bg.style.width = prop * magnifier_m.offsetWidth + "px";
    big_bg.style.height = prop * magnifier_m.offsetHeight + "px";
    
	magnifier_m.addEventListener("mouseenter" , toggle.bind(false,"show"));
    magnifier_m.addEventListener("mouseleave" , toggle.bind(false,"hide"));
    
	function toggle(type){ 
                  var display = null;
                  if(type === "show"){
                        display = "block";
                  }else{
                        display = "none";
                  }
                  focus.style.display = display;
                  big_pic.style.display = display;
            }
	magnifier_m.addEventListener("mousemove",eleMove);
	
	function eleMove(evt){
                  var e = evt || window.event;
                  var _left = e.offsetX;
                  var _top = e.offsetY;

                  _left = _left - focus.offsetWidth / 2 ;
                  _top = _top - focus.offsetHeight / 2;

                  _left = _left <= 0 ? 0 : _left;
                  _top = _top <= 0 ? 0 : _top;

                  var maxLeft = magnifier_m.offsetWidth - focus.offsetWidth;
                  var maxTop =  magnifier_m.offsetHeight - focus.offsetHeight;

                  _left = _left >= maxLeft ? maxLeft : _left;
                  _top = _top >= maxTop ? maxTop : _top;
             
                  focus.style.left = _left + "px";
                  focus.style.top = _top  + "px";
                  
				big_bg.style.left = -_left * prop + "px";
                big_bg.style.top = -_top * prop + "px";

            }     

            l_items = Array.from(l_items);
            l_items.forEach((item)=>{
                  item.addEventListener("click",choice.bind(false,item))
            })
            
	function choice(item){     
                  l_items.forEach((item)=>{
                        item.className = "";
                  })
              
                  item.className = "active";
                  
                  var bigSrc = item.getAttribute("data-big");
                  var smallSrc = item.getAttribute("data-small");
                  
                  small_bg.src = smallSrc;
                  big_bg.src = bigSrc;
            }