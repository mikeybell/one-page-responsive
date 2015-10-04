$(function() {

	// jQuery Goes here!
	$('.burger').on('click', function(){
		$("nav").animate({left: '0'}, 250, 'swing');
		$("body").animate({left: '30%'}, 250, 'swing');
	});


	$('.nav-close').on('click', function(){
		$("nav").animate({left: '-30%'}, 250, 'swing');
		$("body").animate({left: '0'}, 250, 'swing');
	});


});