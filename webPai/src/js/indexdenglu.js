var oBtn1=document.getElementById("btn1");
var oBtn2=document.getElementsByClassName("btn2")[0];
var timer=null;
var oPage2=document.getElementsByClassName("page2")[0];
var oInput=oPage2.getElementsByTagName("input");
var oInputD=document.getElementsByClassName("inputD")[0];
var oInputC=document.getElementsByClassName("inputC")[0];
var oInputB=document.getElementsByClassName("inputB")[0];
var i=60;
           //发送的是手机号
           function add(){
           	$(function(){
	            $.ajax({
		            type:"get",
		            url:arrbase+"/vote/sendIdentifyingCode2",
		            dataType:"jsonp",
		            jsonp:"callback",
		            data:{"user_phone":$(".inputB").val()},
		            async:true,
		            //xhrFields:{withCredentials:true},
		            success:function(json1){
		            	if(json1.status_type==1){
		            		alert("发送失败")
		            	}else{
		            		alert("发送成功");
		            	}
		            },
		            error:function(json1){
		            	alert("error")
		            }
	            })
           })
         }
           //发送的是验证码
           function show(){
           	$(function(){
           		$.ajax({
           			type:"get",
           			url:arrbase+"/user/login",
           			dataType:"jsonp",
           			jsonp:"callback",
           			xhrFields:{withCredentials:true},
           			crossDomain:true,
           			data:{
           			"identifying_code":$(".inputC").val(),
           			"user_phone":$(".inputB").val()
           			},
           			async:true,
           			//'Access-Control-Allow-Origin': '*',
           			success:function(json1){
           				if(json1.status_type==1){
           					alert("验证码写错了请重新填写");
           					oInputD.disabled=false;
           				}else{
           					alert("success");
           				}
           			},
           			error:function(json1){
           				alert("error");
           			}
           		})
           	})
           }
           oBtn1.onclick=function(){
           	window.location.href ="index.html";
           }
           //点击登录
          oBtn2.onclick=function(){
            	if(oInputC.value!=""&&oInputB.value.length==11){
            		show();
           	}       
		}
          //点击发送验证码
     oInputD.onmousedown=function(){
     	//add();//AjAx;
           	  var i=60;
           	  oInputD.value=i+"秒后重新获取";
           	  oInputD.style.color="#D58512";
           }
           oInputD.onmouseup=function(){
           	add();//AjAx;
           	var i=60;
           	timer=setInterval(function(){
           		i--;
           		oInputD.value=i+"秒后重新获取";
           		if(i<1){
           			clearInterval(timer);
           			oInputD.value="发送验证码";
           			oInputD.disabled=false;
           			oInputD.style.color="#FFFFFF";
           			//$('.input2').removeAttr("disabled"); 
           			//$('.input2').attr("disabled","false");
           		}
           			//oInput2.disabled="disabled";
           			//$('.input2').attr("disabled","true")
           			oInputD.disabled=true;
           	},1000)
           }
           oInputC.onclick=function(){
    	oInputD.disabled=false;
    	oInputC.style.borderColor="transparent";
    }
            changeRootFont(); 
			function changeRootFont() {  
			document.documentElement.style.fontSize = 
			((window.innerWidth / 750) * 100) + 'px'; 
			}  
			window.addEventListener('resize', changeRootFont, false); 
			
//AjAx
