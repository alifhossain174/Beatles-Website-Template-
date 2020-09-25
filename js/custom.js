$nav = $('.header').offset().top;


$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
	autoplay: true,
  autoplaySpeed: 2000,
	speed: 1000,
	fade: true,
	cssEase: 'linear',
	prevArrow: '<i class="fas fa-arrow-left prev"></i>',
	nextArrow: '<i class="fas fa-arrow-right nxt"></i>',
});



$('.body4_content').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
	autoplay: true,
  autoplaySpeed: 1000,
	speed: 1000,
	arrows: false,
});




$('.top_btn').click(function(){
	
	
	$('html,body').animate({
		
		scrollTop : 0
		
	}, 1500);
	
	
});

$(window).scroll(function(){
	
	
	$scrolling = $(this).scrollTop();
	
	if($scrolling >= $nav){
		
		$('.header').addClass('fixedmenu');
		
	}
	else{
		
		$('.header').removeClass('fixedmenu');
	}
	
	
	// Top button Start
	
	if($scrolling >= 400){
		
	 	$('.top_btn').fadeIn();  
	   
	 }
	else{
		
		$('.top_btn').fadeOut();
		
	}
	
	
});