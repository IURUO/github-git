// JavaScript Document

function $( v ){
	if( typeof v === 'function' ){
		window.onload = v;
	} else if ( typeof v === 'string' ) {
		return document.getElementById(v);
	} else if ( typeof v === 'object' ) {
		return v;
	}
}

function getStyle( obj, attr ){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}

function addZ(iNum){
	return iNum<10 ? "0"+iNum : ""+iNum;
}

function doMove ( obj, attr, dir, target, endFn ) {
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;			// 步长
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			
			/*
			if ( endFn ) {
				endFn();
			}*/
			endFn && endFn();
			
		}
		
	}, 30);
}
function getElementsByClassName(parent,className,tag){
	var arr=[];
	var oEles=parent.getElementsByTagName(tag);//这里的tag是获取多重标签下的某一个元素parent指的是谁下的是一个范围，
	for(var i=0;i<oEles.length;i++){
		var arrthis=oEles[i].className.split(" ");
		for(var j=0;j<arrthis.length;j++){ //这个循环的原因是为了防止clss="box box1"这种情况
			if(arrthis[j]==className){
				arr.push(aEles[i]);
				break;
			}
			}
		}
		return arr;
	}
	//alert(getElementsByClassName("$div2","box","p"))//这里p也可以是*通配符
	function addClass(obj,addclass){
		if(obj.className==" "){
			obj.className=addclass;
			}else{
				var arrthis=obj.className.split(" ");
				if(arrIndexOf(arrthis,addclass)==-1){
					obj.className=obj.className+" "+addclass;
					}
				} 
		}
function arrIndexOf(arr,addClass){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==addClass){
            return i;
			}
		}
		return -1;
	}
function setCookie(key,value,t){ //username(key)=wei(value) t:过期时间
var oDate = new Date();
oDate.setDate(oDate.getDate()+t);
document.cookie=key+'='+value+';expires='+oDate.toGMTString();
}
	