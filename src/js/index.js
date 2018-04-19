$(document).ready(function(){
    $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
    $('.header').animate({
		width: '100%'
	}, 'slow');

	$('.front-page').animate({
		height: 'toggle'
    }, 600);

	/*$('.intro-content').animate({
		width: 'toggle'
	}, 'slow');*/
    $('.intro-content h1').animate({
    	width: 'toggle'
    }, 900);
    $('.intro-content p').animate({
    	width: 'toggle',

    }, 1300);

    $('.intro-content button').animate({
    	width: 'toggle'
    }, 1400);	
    
	$("cakes-imgs").css({"left":"2000px"}).animate({
		"left":"0px"
	}, "slow");
$('.cakes-imgs').on('mouseenter', 'img',  function(){
  $(this).addClass('rotate');
});

$('.cakes-imgs').on('mouseleave', 'img', function(){
  $(this).removeClass('rotate');
});

$('.pancake').hide();
$('.slide-pancake').click(function(){
	$('.pancake').animate({
		width: 'toggle'
	});
});
$('.slider-imgs').flickity({
     initialIndex: 1


});
});