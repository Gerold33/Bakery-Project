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

	$('.intro-content').animate({
		width: 'toggle'
	}, 'slow');

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