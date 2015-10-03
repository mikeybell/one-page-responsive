$(function() {

	// jQuery Goes here!
	$('.burger').on('click', function(){
		$("nav").animate({left: '0'}, 250, 'swing');
	});


	$('.nav-close').on('click', function(){
		$("nav").animate({left: '-60%'}, 250, 'swing');
	});


});