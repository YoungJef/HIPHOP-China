$(function(){
	var top = 0
	function gundong(){
		$('.gundong ul').animate({
			'top':top-22
		},1000);
	}
	function gun(){	
		$('.gundong ul').css({
			'top':0
		});
		$('.gundong ul li').eq(1).prependTo('.gundong ul');
		gundong();
	}
	setInterval(gun,2000);
});