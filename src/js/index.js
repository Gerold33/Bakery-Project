$(document).ready(function(){
    $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
//});
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
	//function testing(){
$('.cakes-imgs').on('mouseenter', 'img',  function(){
  $(this).addClass('rotate');
  //$(this).addClass('rotate');//.css({'transform' : 'rotateY(360deg)', 'transition': 'transform 800ms ease-in-out'});
  
});
//}
//setTimeout(testing, 3000);



$('.cakes-imgs').on('mouseleave', 'img', function(){
  $(this).removeClass('rotate');
});





$('.pancake').hide();
$('.slide-pancake').click(function(){
	$('.pancake').animate({
		width: 'toggle'
	});
});
});