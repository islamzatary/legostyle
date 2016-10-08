$(window).resize(function() {
	window.windowsize = $(window).width();
});
$(document).ready(function() {
	$('.clickable').off("click").on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log("clicked");
		$(this).toggleClass('clicked');
	});
	$('.menu_tgl').on('click', function(e) {
		var this_clickable = $(this);
		navAppearance(this_clickable);
	});
	function navAppearance(this_clickable) {
		if(this_clickable.hasClass("clicked")) {
			if(lang == "ar") {
				$("#sidebar-panel").addClass("move_menu").css({"right":"0"});
			} else {
				$("#sidebar-panel").addClass("move_menu").css({"left":"0"});
			}
		} else {
			if(lang == "ar") {
				$("#sidebar-panel").removeClass("move_menu").css({"right":"-200px"});
			} else {
				$("#sidebar-panel").removeClass("move_menu").css({"left":"-200px"});
			}
		}
	}
	$(".menu").hover(function(){
			if(!$(this).hasClass("menu_click")){
				$(this).find(".sub-menu").show();
			}
		}, function(){
			if(!$(this).hasClass("menu_click")){
				$(this).find(".sub-menu").hide();
			}
		}
	);
	$(".menu.menu_click .i-down-arrow").on("click", function() {
		var sub_menu = $(this).parents(".menu_click").find(".sub-menu");
		if(sub_menu.is(":visible")){
			sub_menu.hide();
		} else {
			sub_menu.show();
		}
		return false;
	});
	$(".nav-menu > li > a").on("click", function(e){
		var nav_menu = $(this).parent();
		var subnav = nav_menu.find(".subnav-menu");
		if(subnav.length >0){
			e.preventDefault();
			$(".nav-menu > li").removeClass("onH");
			$(".nav-menu .subnav-menu").slideUp();
			if(subnav.is(":visible")){
				subnav.slideUp();
				nav_menu.removeClass("onH");
			} else {
				nav_menu.addClass("onH");
				subnav.slideDown();
			}
			return false;
		}
	});

	function getWindowWidth() {
		var windowsize = $(window).width();
		return windowsize;
	}
	// MESSAGE BLOCK NOTIFICATION
	$(document).on("click", ".msg_clickable", function(e) {
		e.preventDefault();
		var msg_block = $(this).next(".msg_clickable_block");
		if (msg_block && msg_block != ""){
			$(".msg_clickable_block").not(msg_block).hide();
			var is_msg = $(this).hasClass("msg_clickable") && msg_block.is(":visible");
			if(is_msg) {
				$(".msg_clickable_block").hide();
				return false;
			}
			msg_block_position($(this),msg_block,"bottom");
			return false;
		} else {
			console.log("<><<><><>");
		}
	});
	$('.autoviewMsg').each(function(){
		var $this = $(this);
		var msgCount = parseInt($this.find(".autoviewCount").text());
		if (msgCount>0) {
			var msg_block = $(this).next(".msg_clickable_block");
			msg_block_position($(this),msg_block,"bottom");
		}
	});
	// Lego Tooltips ## ADVANCED
	$(document).on("mouseover", ".msg_hover", function(e) {
		e.preventDefault();
		var msg_block = $(this).next(".msg_hover_block");
		if (msg_block && msg_block != ""){
			$(".msg_hover_block").not(msg_block).hide();
			msg_block_position($(this),msg_block,"top");
			return false;
		} else {
			console.log("<><<><><>");
		}
	});
	///
	function msg_block_position(clickable, target, position) {
		if(position=="top") {
			var msg_block_top = clickable.offset().top-clickable.outerHeight()-target.outerHeight()+5;
			var msg_block_right = clickable.offset().left;
			if(lang == "ar") {
				var msg_block_width = target.outerWidth()-clickable.outerWidth();
				target.css({"top": msg_block_top, "left": msg_block_right+msg_block_width, "position": "absolute"}).show();
			} else {
				target.css({"top": msg_block_top, "left": msg_block_right, "position": "absolute"}).show();
			}
		} else {
			var msg_block_top = clickable.offset().top+clickable.outerHeight()+5;
			var msg_block_right = clickable.offset().left+clickable.outerWidth()-target.outerWidth();
			if(lang == "ar") {
				var msg_block_width = target.outerWidth()-clickable.outerWidth();
				target.css({"top": msg_block_top, "left": msg_block_right+msg_block_width, "position": "absolute"}).show();
			} else {
				target.css({"top": msg_block_top, "left": msg_block_right, "position": "absolute"}).show();
			}
		}
		return false;
	}
	$(document).on("click", "body", function(e) {
		e.stopPropagation();
		$(".msg_clickable_block, .msg_hover_block, .sub-menu").hide();
	});
});