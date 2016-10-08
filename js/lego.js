var lang = ($('body').attr('id')!="" ? $('body').attr('id') : "en")
$(document).ready(function() {

});
var hash = window.location.hash;
if(hash) {
	var tab_id = hash.substring(1);
	if($(hash).length) {
		$(".flat_tabs_box").hide();
		$(".flat_tabs li").removeClass("on");
		$("."+tab_id).parent().addClass("on");
		$(hash).show();
	}
}

/************* Multi Slider *****************/
jQuery.fn.multiSlider = function( options ) {
	var defaults = {
		autoMove: false,
		timerMove: 1000,
		nextMoveSize: 150,
		prevMoveSize: 150,
		timerMoveSize: 100,
	};
	var settings = $.extend( {}, defaults, options );
	var sliderContainerWidth = this.find(".multi_slider_list_container").outerWidth();
	var sliderHeight = this.find("li:first-child").outerHeight();
	var sliderWidth = 0;
	var sliderLeft = this.find("ul").position().left;
	var mirroredWidth = 0;
	var multiSliderTimeout = "";
	var that = this;
	this.find("ul").height(sliderHeight);
	
	function stopMultiSliderTimer(){
		clearInterval(multiSliderTimeout);
	}
	function startMultiSlider(moveType) {
		MultiSliderAnimateMove(moveType,settings.timerMoveSize,"slow");
	}
	function startMultiSliderTimer(moveType){
		timeSec = settings.timerMove;
		if(settings.timerMove<1000) {
			timeSec = 1000;
		}
		multiSliderTimeout = setInterval(function(){
			startMultiSlider(moveType)
		},timeSec);
	}
	function MultiSliderAnimateMove(moveType,moveSize,moveSpeed) {
		if(settings.autoMove) {
			stopMultiSliderTimer();
		}
		
		var moveOper = "-";
		if(moveType=="prev") {
			moveOper = "+";
		}
		that.find("ul").animate({left:moveOper+"="+moveSize},moveSpeed,function(){
			if(moveType=="next") {
				if ( that.find("ul").position().left <= -(sliderWidth-mirroredWidth) )
				{
					var restLeft = that.find("ul").position().left + (sliderWidth-mirroredWidth);
					that.find("ul").css({left:restLeft});
				}
			} else {
				if ( that.find("ul").position().left >= 0 )
				{
					that.find("ul").css({left:-(sliderWidth-mirroredWidth-that.find("ul").position().left)});
				}
			}
		});
		
		if(settings.autoMove) {
			startMultiSliderTimer(moveType);
		}
	}
	$(window).load(function(){
		if(settings.autoMove) {
			startMultiSliderTimer("next");
		}
		
		var sliderHeight = that.find("li:first-child").outerHeight();
		that.find("ul li").each(function(){
			if( sliderWidth < sliderContainerWidth )
			{
				$(this).clone().addClass("mirrored").appendTo(that.find("ul"));
				mirroredWidth = mirroredWidth + $(this).outerWidth();
			}
			sliderWidth = sliderWidth + $(this).outerWidth();
		});
		sliderWidth = sliderWidth + mirroredWidth;
		that.find("ul").height(sliderHeight);
		that.find("ul").width(sliderWidth);
		
		$(".multi_slider_next").on("click",function(){
			MultiSliderAnimateMove("next",settings.nextMoveSize,"fast");
		});
		$(".multi_slider_prev").on("click",function(){
			MultiSliderAnimateMove("prev",settings.prevMoveSize,"fast");
		});
	})
	return this;
};
/************* End Multi Slider *****************/