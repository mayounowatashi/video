$(function(){//
	var isplay=false;//记录播放状态
	$("#mp3play").click(function(){
		//1.判断当前状态
		if(!isplay){
			debugger;
			isplay=true;
			//改变动画状态
			$("#album_ioc").css({"animationPlayState":"running"});
			//把播放变成暂停
			$(this).find('a').text('暂停');
			//播放音乐
			document.getElementById("theplayer").play();
			
		}else{
			isplay=false;
			//改变动画状态
			$("#album_ioc").css({"animationPlayState":"paused"});
			//把暂停变成播放
			$(this).find('a').text('播放');
			//播放音乐
			document.getElementById("theplayer").pause();
		}
	})
	
	
})
