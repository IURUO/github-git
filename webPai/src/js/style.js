var oBtn1=document.getElementById("btn1");
var oBtn2=document.getElementsByClassName("btn2")[0];
var oInput2=document.getElementsByClassName("input2")[0];
var timer=null;
var oPage2=document.getElementsByClassName("page2")[0];
var oInput=oPage2.getElementsByTagName("input");
var i=60;
oInput2.disabled=false;
function add(){
	$(function(){
		$.ajax({
			type:"post",
			url:arrbase+"/vote/sendIdentifyingCode2",
			async:true,
			dataType:"jsonp",
			jsonp:"callback",
			data:{"user_phone":$("#text3").val()},
			//'Access-Control-Allow-Origin': '*',
		    success:function(json1){
		    	console.log("send success");
		    	alert("success");
		    },
		    error:function(json1){
		    	alert("error");
		    }
		});
	})
}
function show(){
		$.ajax({
			type:"get",
			url:arrbase+"/user/register",		
			dataType:"jsonp",
			jsonp:"callback",
			data:{
				 "identifying_code": $(".input1").val(),
				"user_name":$("#text2").val(),			
				"user_phone":$("#text3").val(),
				"user_cardId":$("#text1").val()
       },
			success:function(json1){
				alert("success");
                   if(json1.status_type==1){
					alert("该用户已经注册");
				}else if(json1.status_type==2){
					alert("该验证码错误")
				}else{
					window.location.href="index.html";
				}
			},
          error:function(json1){
          	alert("error");	
          }
		});
}
       oBtn1.onmousedown=function(){
		       oBtn1.style.backgroundColor="#f58918";
		       oBtn1.style.border="none";
			}
           oBtn1.onmouseup=function(){
           	oBtn1.style.backgroundColor="#CDCDCD";
           		 alert("1")
           		show();
           }
//         oBtn2.onclick=function(){
//         	var getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);   
//  getUserMedia.call(navigator, {
//      video: true,   
//      audio: true   
//  }, function(localMediaStream) {   
//      var video = document.getElementById('video');   
//      video.src = window.URL.createObjectURL(localMediaStream);   
//      video.onloadedmetadata = function(e) {   
//      console.log("Label: " + localMediaStream.label);   
//      console.log("AudioTracks" , localMediaStream.getAudioTracks());   
//      console.log("VideoTracks" , localMediaStream.getVideoTracks());   
//      };   
//  }, function(e) {   
//      console.log('Reeeejected!', e);   
//  });   
//         }
           oInput2.onmousedown=function(){
           	  var i=60;
           	  oInput2.value=i+"秒后重新获取";
           	  oInput2.style.border=" 0.03rem  #f58918 solid"
           }
           oInput2.onmouseup=function(){
           	add();
           	var i=60;
           	timer=setInterval(function(){
           		i--;
           		oInput2.value=i+"秒后重新获取";
           		if(i<1){
           			oInput2.disabled=false;
           			clearInterval(timer);
           			oInput2.value="发送验证码";
           			oInput2.style.border=" 0.03rem  #cdcdcd solid"
           			oInput2.disabled=false;
           			//$('.input2').removeAttr("disabled"); 
           			//$('.input2').attr("disabled","false");
           		}
           			//oInput2.disabled="disabled";
           			//$('.input2').attr("disabled","true")
           			oInput2.disabled=true;
           	},1000)
           }
    for(var i=0;i<oInput.length-2;i++){
    	oInput[i].onclick=function(){
    		for(j=0;j<oInput.length-2;j++){
    			oInput[j].style.border = " 0.03rem  #cdcdcd solid";
			oInput[j].className = "";
    		}
    		this.style.border="0.03rem #f58918 solid";
    	}
    }
    oInput[3].onclick=function(ev){
    	oInput2.disabled=false;
    var ev=ev||event;
    this.style.border="0.03rem #f58918 solid";
    ev.cancelBubble=true;
    for(j=0;j<oInput.length-2;j++){
    			oInput[j].style.border = " 0.03rem  #cdcdcd solid";
			oInput[j].className = "";
    		}
    }
    document.onclick=function(){
	oInput[3].style.border="0.03rem  #cdcdcd solid";
}
    changeRootFont(); 
			function changeRootFont() {  
			document.documentElement.style.fontSize = 
			((window.innerWidth / 750) * 100) + 'px'; 
			}  
			window.addEventListener('resize', changeRootFont, false); 
			
