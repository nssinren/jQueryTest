////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
/*
$(function(){
	$('.fadeBtn').hover(function(){
		$(this).stop().animate({opacity:'0.5',fontSize:'22px'},300);
	}, function(){
		$(this).stop().animate({opacity:'1',fontSize:'18px'},300);
	});
});
*/

$(function(){
	$('.fadeBtn').hover(function(){
		$(this).stop().animate({fontSize:'40px'}, 1000);
		$(this).addClass('fadeBtnAfter');
	}, function(){
		$(this).stop().animate({fontSize:'18px'}, 2000);
		$(this).removeClass('fadeBtnAfter');
	});

	$('.rotateBtn').hover(function(){
		$(this).addClass('rotateX');
	}, function(){
		$(this).removeClass('rotateX');
	});
});