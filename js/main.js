'use strict' 

jQuery(function(){
	$(".menu-item-1").hover(function(){
		$(".bg1").fadeIn(800); 
	}, function(){
		$(".bg1").fadeOut(800); 
	})
	$(".menu-item-2").hover(function(){
		$(".bg2").fadeIn(800); 
	}, function(){
		$(".bg2").fadeOut(800); 
	})
	$(".menu-item-3").hover(function(){
		$(".bg3").fadeIn(800); 
	}, function(){
		$(".bg3").fadeOut(800); 
	})
	$(".menu-item-4").hover(function(){
		$(".bg4").fadeIn(800); 
	}, function(){
		$(".bg4").fadeOut(800); 
	})
	$(".menu-item-5").hover(function(){
		$(".bg5").fadeIn(800); 
	}, function(){
		$(".bg5").fadeOut(800); 
	})
})

var t1 = new TimelineMax({
	paused: true
}); 

t1.to(".outer-content .title", 1, {
	opacity: 0
}); 

t1.to(".menu", 2, {
	width: "45%", 
	ease: Expo.easeInOut
}, "+=1"); 

t1.staggerFrom(".menu ul li", 2, {
	y:20,
	opacity:0, 
	ease: Expo.easeInOut}, 0.1); 

t1.to(".images", 2, {
	width: "45%",
	ease: Expo.easeInOut, 
	delay: -2},"+=1"); 

t1.to(".toggle-button span:nth-child(1)", 1.5, {
	y:"11px", 
	ease:Expo.easeInOut}, "+=1"); 

t1.reverse(); 

$(document).on("click", ".toggle-button", function(){
	t1.reversed(!t1.reversed()); 
}); 

$(document).on("click", "#menu", function(){
	t1.reversed(!t1.reversed()); 
}); 