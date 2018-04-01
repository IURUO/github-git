var oSelect=document.getElementsByClassName("select")[0];
var oUl1=document.getElementById("ul1")
var aLi=oUl1.getElementsByTagName("li");
var oBtn=document.getElementById("btnA")
var oFooter=document.getElementsByClassName("footer1")[0];
var Fli=oFooter.getElementsByTagName("li");
var oP=oFooter.getElementsByTagName("p");
var oImg=oFooter.getElementsByTagName("img");
var arr1=["../../img/img99.png","../../img/img88.png"];
var arr2=["../../img/16.png","../../img/img18.png"];
var arr3=["../../img/img17.png","../../img/img200.png"];
var arr4=["../../img/00.png","../../img/img19.png"];
var oUl2=document.getElementsByClassName("ul2")[0];
var oDown=document.getElementById("down");
var ARR=[];
var page=1;
var logoid=[];
var arrlogo=["../../img/huangjin.jpg","../../img/baiyin.jpg","../../img/qingtong.jpg"];
var arraddress=["../../../HX/homepage.html","../../../WSM/guize.html"];
$(document).ready(function(){
	addajax(1);
})
for(var i=0;i<2;i++){
	Fli[i].index=i
  Fli[i].ontouchstart=function(){
	oP[this.index].style.color="red";
	oImg[this.index].src=arr1[this.index];	
     }
  Fli[i].ontouchend=function(){
  	oP[this.index].style.color="#FFFFFF";
  	oImg[this.index].src=arr2[this.index];
  	window.location.href=arraddress[this.index];
  }
}
Fli[2].onclick=function(){
	window.location.href="../../../DWJ/hunting.html";
}
    Fli[4].ontouchstart=function(){
	oP[3].style.color="red";
	oImg[4].src=arr3[1];	
     }
  Fli[4].ontouchend=function(){
  	oP[3].style.color="#FFFFFF";
  	oImg[4].src=arr4[1];
  	window.location.href="../../../WSM/guize.html";
  }
 var e=1;	
var a=null;
 for(var i=0;i<aLi.length;i++){
 	aLi[i].index=i;
 	aLi[i].onclick=function(){
 		oSelect.innerHTML=this.innerHTML;
 		for(var j=0;j<aLi.length;j++){
			aLi[j].style.color = "#000";
			aLi[j].style.backgroundColor = "#fff";
			aLi[j].className = "";	
		}
 		this.style.color = "#fff";
		this.style.backgroundColor = "#ffa004";
		this.className = "color";
		 a=this.index+1;//传的是下标
		addajax(); 
 	}
 }
 var c=1;
 $.ajax({
 	type:"get",
 	url:"",
 	async:true,
 	data:{},
 	success:function(jason1){
 		
 	},
 	error:function(json1){
 		alert(error);
 	}
 });
 function addajax(a){
			$.ajax({
				type:"get",
				url:"../json/paihang.json",
				//url:arrbase+"/search/rankByTypeName",
				dataType:"json",
			   //'Access-Control-Allow-Origin': '*',
				async:true,
				data:{"currentPage":page++,"typeInt":a},
				success:function(json1){
			      for(var k=0;k<json1.list.length;k++){
			      	if(k<3&c==1){
			    var dLi=document.createElement("li");
				var dimg=document.createElement("img");
				var dSpan=document.createElement("span");
				var dp=document.createElement("p");
				var  ddimg=document.createElement("img");
				ddimg.src=arrlogo[k];
				dp.innerHTML=e;
				e++;
				dSpan.innerHTML=json1.list[k].brand_voteCount;
				dimg.src=json1.list[k].brand_logo;
			    oUl2.appendChild(dLi);
			    dLi.appendChild(ddimg);
			    dLi.appendChild(dp);
				dLi.appendChild(dimg);
				dLi.appendChild(dSpan);
				page = json1.currentPage;
				logoid.push(json1.list[k].brand_id);
				dLi.onclick=function(){
					alert($(this));//跳转到投票页面
				}
			      	}else{
			     var dLi=document.createElement("li");
				var dimg=document.createElement("img");
				var dSpan=document.createElement("span");
				var dp=document.createElement("p");
				var  ddimg=document.createElement("img");
				dLi.onclick=function(){
					alert("123");//跳转到投票页面
				}
				dp.innerHTML=e;
				e++;
				dSpan.innerHTML=json1.list[k].brand_voteCount;
				dimg.src=json1.list[k].brand_logo;
			    oUl2.appendChild(dLi);
			    dLi.appendChild(ddimg);
			    dLi.appendChild(dp);
				dLi.appendChild(dimg);
				dLi.appendChild(dSpan);
				page = json1.currentPage;
				logoid.push(json1.list[k].brand_id);
			      	}
				}
			      if(k==json1.list.length){
			      	c++;//为了区分滑到底请求和第一次，第一次需要皇冠但是之后不用
							$(".section").scroll(function(){
								var scrollTop = $(this).scrollTop(); 
								var height = $(this).height();
								var scrollHeight = $(this).get(0).scrollHeight;
                                var h = scrollHeight - height - scrollTop;
                                //alert(h);
                                if(h==0){
                                	setInterval(addajax(a),1000);
                                	$(".sousuo").css("display","block");
                                }
							  })
			      }
			},
				error:function(json1){
					alert("error");
				} 
			});
	}
oBtn.onclick=function(ev){
	var ev=ev||event;
	oUl1.style.display="block";
	ev.cancelBubble=true;
}
document.onclick=function(){
	oUl1.style.display="none";
}
 changeRootFont(); 
			function changeRootFont() {  
			document.documentElement.style.fontSize = 
			((window.innerWidth / 750) * 100) + 'px'; 
			}  
			window.addEventListener('resize', changeRootFont, false); 

