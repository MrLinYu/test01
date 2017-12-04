window.onload=function(){
	//封装getId函数
	function getId(id){
		return document.getElementById(id);
	}
	//日期
	function myDate(){
		var date=new Date(),
			year=date.getFullYear(),
			mounth=date.getMonth()+1,
			dat=date.getDate(),
			day=date.getDay(),
			Mounth,
			Day;
		var mounthes=new Array();
		mounthes[0]="天";
		mounthes[1]="一";
		mounthes[2]="二";
		mounthes[3]="三";
		mounthes[4]="四";
		mounthes[5]="五";
		mounthes[6]="六";
		Day=mounthes[day];
		getId("date").innerHTML="今天："+year+"年"+mounth+"月"+dat+"日星期"+Day;
	}
	myDate();
	//search搜索框
	function search(){
		getId("keyword").onfocus=function(){
		this.value="";
		}
		getId("keyword").onblur=function(){
			this.value="关键词";
		}
	}
	search();
	//menu背景
	function bag(){
		var lis1=getId("rows1_item2_title").getElementsByTagName("li");
		var lis2=getId("seminary_title").getElementsByTagName("li");
		var lis3=getId("seminary").getElementsByTagName("li");
		var len=lis1.length;
		for(var i=0;i<len;i++){
			lis1[i].onmouseover=function(){
				this.className="add_bcg1";
			}
			lis1[i].onmouseout=function(){
				this.className="";
			}
			lis2[i].onmouseover=function(){
				this.className="add_bcg1";
			}
			lis2[i].onmouseout=function(){
				this.className="";
			}
			lis3[i].onmouseover=function(){
				this.className="add_bcg1";
			}
			lis3[i].onmouseout=function(){
				this.className="";
			}
		}
	}
	bag();

	//焦点图
	function slideImg(){
		var images=getId("bannerbox").getElementsByTagName("img"),
		dots=getId("dots").getElementsByTagName("span"),
		leh=images.length,
		timer=null,
		index=0;
		//开启定时器
		getId("bannerbox").onmouseout=function(){
			timer=setInterval(function(){
				index++;
				if(index>=leh){
					index=0;
				}
				change();
			},3000)	
		}
		//关闭定时器
		getId("bannerbox").onmouseover=function(){
			if(timer) clearInterval(timer);
		}
		//开始调用
		getId("bannerbox").onmouseout();
		//点击按钮实现切换
		for(var i=0;i<leh;i++){
			(function(i){
				dots[i].onclick=function(){
				index=i;
				change();
				}
			})(i)
		}
		//change图
		function change(){
			for(var d=0;d<leh;d++){
				images[d].style.display="none";
				dots[d].className="";
			}
			images[index].style.display="block";
			dots[index].className="add_span";
		}
	}
	slideImg();

}