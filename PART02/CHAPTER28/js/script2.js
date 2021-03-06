////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function(){
	var setElm = $('.loopSlider'),
	slideSpeed = 2000;

	setElm.each(function(){
		var self = $(this),
		selfHeight = self.innerHeight(),
		findUl = self.find('ul'),
		findLi = findUl.find('li'),
		listHeight = findLi.outerHeight(),
		listCount = findLi.length,
		loopHeight = listHeight * listCount;

		findUl.wrapAll('<div class="loopSliderWrap" />');
		var selfWrap = self.find('.loopSliderWrap');

		if(loopHeight > selfHeight){
			findUl.css({height:loopHeight}).clone().appendTo(selfWrap);

			selfWrap.css({height:loopHeight*2});

			function loopMove(){
				selfWrap.animate({top:'-' + (loopHeight) + 'px'},slideSpeed*listCount,'linear',function(){
					selfWrap.css({top:'0'});
					loopMove();
				});
			};
			loopMove();
		}
	});
});
