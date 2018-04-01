		
		//十分low的代码
		var tempTable=document.getElementsByTagName("table")[0];
    var oBtn=tempTable.getElementsByTagName("button");
    var oSpan=tempTable.getElementsByTagName("span");
    var Be=true;
    var oP1=document.getElementById("p1");
    var oButton=oP1.getElementsByTagName("button");
    var oSpan1=document.getElementById("span1");
     var oSelect=document.getElementById("select");
     //页面刷新时出现的 
     $(document).ready(function(){
     	alert(123);
     	$.ajax({
     		type:"post",
     		url:"http://192.168.1.103:8080/brand/loadAllBrand",
     		async:true,
     		data:{"brand_type":$("#select").val()},
     		success:function(data1){
     			func(data1,1);
     		}
     	});
     })
     //分类
				for(var f=0;f<oSelect.length;f++){			
					$("option").eq(f).click(function(){
					 alert($(this).html());//传的就是这个值
					 var a=$(this).html();
					 if($("#name").val()==""){
			 $(function(){
					$.ajax({
						type:"get",
						url:"http://192.168.1.103:8080/brand/loadAllBrand",
						dataType:"json",
						async:true,
						//'Access-Control-Allow-Origin': '*',
				 		data:{"brand_type":a},
						success:function(data1){
							alert("success");
							func(data1,1);
				            },
				         error:function(){
				         	alert("error");
				         }          
				      })
					})
					 }else{
				 $(function(){
					$.ajax({
						type:"get",
						url:"http://192.168.1.103:8080/brand/loadAllBrand",
						dataType:"json",
						async:true,
						//'Access-Control-Allow-Origin': '*',
				 		data:{"brand_type":a,"brand_name":$("#name").val()},
						success:function(data1){
							alert("success");
							func(data1,1);
				            },
				         error:function(){
				         	alert("error");
				         }          
				      })
					})
					 }
				})
			}
  	function func(data1,h){
  					$("#span2").html(data1.totalCount);
	                $("#span3").html(data1.totalPage);
	                if(data1.brands.length==8){
	                	    for(var i=0;i<data1.brands.length;i++){
	               	                alert("111")
		                		var trh=tempTable.getElementsByTagName("tr")[h++];
		                		var tdh1=trh.getElementsByTagName("td")[1];
		                		var tdh1img=tdh1.getElementsByTagName("img")[0];
		                		var tdh2=trh.getElementsByTagName("td")[2];
		                		var tdh3=trh.getElementsByTagName("td")[3];
		                		var tdh5=trh.getElementsByTagName("td")[5];
		                		var tdh4=trh.getElementsByTagName("td")[4];
		                		var tdhbutton=tdh4.getElementsByTagName("button")[0];
		                		var tdhbutton1=tdh4.getElementsByTagName("button")[1];
		                	    tdh1img.src=data1.brands[i].logo_address;
		                 		tdh2.innerHTML=data1.brands[i].brand_name;
	                 			tdh3.innerHTML=data1.brands[i].brand_voteCount;
	                 			tdh5.innerHTML=data1.brands[i].brand_id;
	                 			tdhbutton.style.display="block";
	                 			tdhbutton1.style.display="block";
  							}
	                }else{
	                	for(var i=0;i<data1.brands.length;i++){
	               	                alert("111")
		                		var trh=tempTable.getElementsByTagName("tr")[h++];
		                		var tdh1=trh.getElementsByTagName("td")[1];
		                		var tdh1img=tdh1.getElementsByTagName("img")[0];
		                		var tdh2=trh.getElementsByTagName("td")[2];
		                		var tdh3=trh.getElementsByTagName("td")[3];
		                		var tdh5=trh.getElementsByTagName("td")[5];
		                	    tdh1img.src=data1.brands[i].logo_address;
		                 		tdh2.innerHTML=data1.brands[i].brand_name;
	                 			tdh3.innerHTML=data1.brands[i].brand_voteCount;
	                 			tdh5.innerHTML=data1.brands[i].brand_id;
  							}
	                	for(var j=i;j<8;j++){
	               	                alert("111")
		                		var trh=tempTable.getElementsByTagName("tr")[h++];
		                		alert(h	)
		                		var tdh1=trh.getElementsByTagName("td")[1];
		                		var tdh1img=tdh1.getElementsByTagName("img")[0];
		                		var tdh2=trh.getElementsByTagName("td")[2];
		                		var tdh3=trh.getElementsByTagName("td")[3];
		                		var tdh5=trh.getElementsByTagName("td")[5];
		                		var tdh4=trh.getElementsByTagName("td")[4];
		                		var tdhbutton=tdh4.getElementsByTagName("button")[0];
		                		var tdhbutton1=tdh4.getElementsByTagName("button")[1];
		                	    tdh1img.src="";
		                 		tdh2.innerHTML=null;
	                 			tdh3.innerHTML=null;
	                 			tdh5.innerHTML=null;
	                            tdhbutton.style.display="none";
	                            tdhbutton1.style.display="none"
  							}
	                }
	      } 
	       //删除调用的AJAX
function add(c){
	$(function(){
		$.ajax({
			type:"post",
			url:"http://192.168.1.103:8080/brand/deleteById",
			async:true,
			data:{"brand_id":c},
			success:function(data1){
				if(data1.status_type=="1"){
					alert("success");
					$(function(){
						$.ajax({
							type:"post",
							url:"http://192.168.1.103:8080/brand/loadAllBrand",
							async:true,
							data:{"brand_type":oSelect.value,"pageNum":oSpan1.innerHTML},
							success:function(data1){
								func(data1,1);
								$("#span2").html(data1.totalCount);
								alert("success");
    		               },
    		error:function(data1){
    			alert("error")
    		}
						});
					})
				}else{
					alert("失败")
				}
			},
			error:function(data1){
				alert("error")
			}
		});
	})
	    }
$("#btn1").click(function(){
	var trh=tempTable.getElementsByTagName("tr")[1];
	var trhdd=trh.getElementsByTagName("td")[5];
	var c=trhdd.innerHTML;
	add(c);
})
$("#btn2").click(function(){
	var trh=tempTable.getElementsByTagName("tr")[2];
	var trhdd=trh.getElementsByTagName("td")[5];
	var c=trhdd.innerHTML;
    add(c);
})
$("#btn3").click(function(){
	var trh=tempTable.getElementsByTagName("tr")[3];
	var trhdd=trh.getElementsByTagName("td")[5];
	var c=trhdd.innerHTML;
	add(c)
})
$("#btn4").click(function(){
    var trh=tempTable.getElementsByTagName("tr")[4];
	var trhdd=trh.getElementsByTagName("td")[5];
	var c=trhdd.innerHTML;
	add(c);
})
$("#btn5").click(function(){
	var trh=tempTable.getElementsByTagName("tr")[5];
	var trhdd=trh.getElementsByTagName("td")[5];
	var c=trhdd.innerHTML;
	add(c);
})
$("#btn6").click(function(){
	var trh=tempTable.getElementsByTagName("tr")[6];
	var trhdd=trh.getElementsByTagName("td")[5];
	var c=trhdd.innerHTML;
	add(c);
})
$("#btn7").click(function(){
	var trh=tempTable.getElementsByTagName("tr")[7];
	var trhdd=trh.getElementsByTagName("td")[5];
	var c=trhdd.innerHTML;
	add(c);
})
$("#btn8").click(function(){
    var trh=tempTable.getElementsByTagName("tr")[8];
	var trhdd=trh.getElementsByTagName("td")[5];
	var c=trhdd.innerHTML;
	add(c);
})
    var q=17;
   	var p=9;
   	//点击下一页序号按顺序增大并且页数增大
  	oButton[2].onclick=function(){
   	 oSpan1.innerHTML++;
   	     var x=0;
   	for(p;p<q;p++){
   		x++;
   var tempTdN=tempTable.getElementsByTagName("tr")[x];
  var td=tempTdN.getElementsByTagName("td")[0];
                td.innerHTML=p;
   	}
   	q=p+8;
   	alert(oSpan1.innerHTML)//传的就是这个值
   	var v=oSpan1.innerHTML;
   	if($("#name").val()==""){
   	$(function(){
    	$.ajax({
    		type:"post",
    		url:"http://192.168.1.103:8080/brand/loadAllBrand",
    		async:true,
    		data:{"brand_type":oSelect.value,"pageNum":v},
    		success:function(data1){
    			alert("success");
    			func(data1,1);
    			$("#span2").html(data1.totalCount);
	            $("#span3").html(data1.totalPage);
    		},
    		error:function(data1){
    			alert("error");
    		}
    	});
    })
   	}else{
   $(function(){
    	$.ajax({
    		type:"post",
    		url:"http://192.168.1.103:8080/brand/loadAllBrand",
    		async:true,
    		data:{"brand_type":oSelect.value,"pageNum":v,"brand_name":$("#name").val()},
    		success:function(data1){
    		   func(data1,1);
    			$("#span2").html(data1.totalCount);
	            $("#span3").html(data1.totalPage);
    		},
    		error:function(data1){
    			alert("error");
    		}
    	});
    })
   	}
 }
   //点击上一页
	  var s=8;
	  oButton[1].onclick=function(){
	  oSpan1.innerHTML--;
	  var tempTdN=tempTable.getElementsByTagName("tr")[1];
	  var td=tempTdN.getElementsByTagName("td")[0];
	  var x=0;
   	if(td.innerHTML==1){
   		oSpan1.innerHTML=1;
   		for(var p=1;p<9;p++){
  	 		var tempTdN=tempTable.getElementsByTagName("tr")[p];
 		 	var td=tempTdN.getElementsByTagName("td")[0];
                td.innerHTML=p;
   		}
   }else{
   		for(var p=1;p<9;p++){
   			var tempTdN=tempTable.getElementsByTagName("tr")[p];
  			var td=tempTdN.getElementsByTagName("td")[0];
                td.innerHTML=td.innerHTML-8;
  	 	}	
  	 	 var b=oSpan1.innerHTML;
  	 	 if($("#name").val()==""){
			 $(function(){
			    	$.ajax({
			    		type:"post",
			    		url:"http://192.168.1.103:8080/brand/loadAllBrand",
			    		async:true,
			    		data:{"brand_type":oSelect.value,"pageNum":b,},
			    		success:function(data1){
			                  func(data1,1);
			                  $("#span2").html(data1.totalCount);
				              $("#span3").html(data1.totalPage);
			    		},
			    		error:function(data1){
			    			alert("error");
			    		}
			    	});
			    })
  	 	 }else{
			  	 $(function(){
			    	$.ajax({
			    		type:"post",
			    		url:"http://192.168.1.103:8080/brand/loadAllBrand",
			    		async:true,
			    		data:{"brand_type":oSelect.value,"pageNum":b,"brand_name":$("#name").val()},
			    		success:function(data1){
			    			if(data1.brands==null){
			    				alert("未搜索到该对象")
			    			}
			                  func(data1,1);
			                  $("#span2").html(data1.totalCount);
				              $("#span3").html(data1.totalPage);
			    		},
			    		error:function(data1){
			    			alert("error");
			    		}
			    	});
			    })
  	 	 }
  }
 }
   //点击第一页
   var d=1;
   oButton[0].onclick=function(){
    	oSpan1.innerHTML=1;
    	for(var p=1;p<9;p++){
  		 var tempTdN=tempTable.getElementsByTagName("tr")[p];
  		 var td=tempTdN.getElementsByTagName("td")[0];
         td.innerHTML=p;
    	}
    	$(function(){
    		$.ajax({
	    		type:"post",
	    		url:"http://192.168.1.103:8080/brand/loadAllBrand",
	    		async:true,
	    		data:{"brand_num":1,"brand_type":oSelect.value},
	    		success:function(data1){
	    	             func(data1,1);
	    	             $("#span2").html(data1.totalCount);
	                     $("#span3").html(data1.totalPage);
    		},
    		error:function(data1){
    			alert("error");
    		}
    	});
    })
   }
   //品牌管理
   var oPlus=document.getElementById("plus");
   var oUld=document.getElementById("ulD");
   var oSpand=oUld.getElementsByTagName("span");
   var oUldd=document.getElementById("ulD1");
   var oLidd=oUldd.getElementsByTagName("li");
   var Be=true;
   var Beon=true;
   for(var i=0;i<oLidd.length;i++){
   	oLidd[i].onclick=function(){
   		for(var j=0;j<oLidd.length;j++){
   			oLidd[j].style.color="#000000";
   		}
   		this.style.color="#81e3f2";
   	}
   }
 
   	oSpand[1].onclick=function(){
   		if(Be){
   			   		oUldd.style.display="block";
   		oSpand[1].innerHTML="-";
   		}else{
   			oUldd.style.display="none";
   		oSpand[1].innerHTML="+";
   		}
   		Be=!Be;
   	}
  	
   oPlus.onclick=function(){
   	if(Beon){
   		   	oUld.style.display="block";
   	oPlus.innerHTML="-";
   	}else{
   		   		   	oUld.style.display="none";
   	oPlus.innerHTML="+";
   	}
   	Beon=!Beon;
   }
   //页数
   var oSelect1=document.getElementById("select1");
   var oPation=oSelect1.getElementsByTagName("option");
   for(var f=0;f<oSelect1.length;f++){
   	   	oPation[f].onclick=function(){
    	alert(this.innerHTML)//传的就是这个值
    	var a=this.innerHTML;
    	$("#span1").html(a);
	 	$(function(){
		$.ajax({
	  		type:"post",
  			url:"http://192.168.1.103:8080/brand/loadAllBrand",
  			async:true,
  			data:{"brand_type":oSelect.value,"pageNum":a},
  			success:function(data1){
  				fun(data1,1);
         },
  			error:function(data1){
  				alert("error");
  			}
  		});
  	})
    }
   }
    //搜索
$("#sou").click(function(){
	//alert($("#name").val())
	var s=$("#name").val();
	$(function(){
		$.ajax({
			type:"post",
			url:"http://192.168.1.103:8080/brand/loadAllBrand",
			async:true,
			data:{"brand_name":s,"brand_type":oSelect.value},
			success:function(data1){
				if(data1.brands==""){
					alert("未搜索到")
				}else{
                func(data1,1);
				alert("success");	
				}
			},
			error:function(data1){
				alert("error");
			}
		});
	})
})
    //设为特色APP
function addajax(a){
		$(function(){
	  	$.ajax({
	  		type:"post",
	  		url:"http://192.168.1.103:8080/brand/setIsSpecialBrand",
	  		async:true,
	  		data:{"brand_id":a},
	  		success:function(data1){
	  			if(data1.status_type==1){
	  				alert("成功")
	  			}else{
	  				alert("失败")
	  			}
	  		},
	  		error:function(data1){
	  			alert("error")
	  		}
	  	});
	  })
}
 $("table button").eq(1).click(function(){
    var trh=tempTable.getElementsByTagName("tr")[1];
	var trhd=trh.getElementsByTagName("td")[5];
	a=trhd.innerHTML;
	alert(a);
	addajax(a);
 })
  $("table button").eq(3).click(function(){
    var trh=tempTable.getElementsByTagName("tr")[2];
	var trhd=trh.getElementsByTagName("td")[5];
	a=trhd.innerHTML;
	alert(a);
   addajax(a);
 })
  $("table button").eq(5).click(function(){
    var trh=tempTable.getElementsByTagName("tr")[3];
	var trhd=trh.getElementsByTagName("td")[5];
	a=trhd.innerHTML;
	alert(a);
    addajax(a);
  })
    $("table button").eq(7).click(function(){
    var trh=tempTable.getElementsByTagName("tr")[4];
	var trhd=trh.getElementsByTagName("td")[5];
	a=trhd.innerHTML;
	alert(a);
   addajax(a);
  })
      $("table button").eq(9).click(function(){
    var trh=tempTable.getElementsByTagName("tr")[5];
	var trhd=trh.getElementsByTagName("td")[5];
	a=trhd.innerHTML;
	alert(a);
    addajax(a);
  })
      $("table button").eq(11).click(function(){
    var trh=tempTable.getElementsByTagName("tr")[6];
	var trhd=trh.getElementsByTagName("td")[5];
	a=trhd.innerHTML;
	alert(a);
   addajax(a);
  })
    $("table button").eq(13).click(function(){
    var trh=tempTable.getElementsByTagName("tr")[7];
	var trhd=trh.getElementsByTagName("td")[5];
	a=trhd.innerHTML;
	alert(a);
    addajax(a);
  })
  $("table button").eq(15).click(function(){
    var trh=tempTable.getElementsByTagName("tr")[8];
	var trhd=trh.getElementsByTagName("td")[5];
	a=trhd.innerHTML;
	alert(a);
   addajax(a);
  })

