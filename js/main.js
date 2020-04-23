$(function(){

	$('.hero-slider').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,	
	});

	$('.new-slider').slick({
		appendDots: $('.section-head__right--new'),
		dotsClass: 'slick-dots__custom',
		dots: true,
		arrows: false,
		// autoplay: true,
		// autoplaySpeed: 5000,
		slidesToShow: 4,
		sladesToScroll: 1,	
	});

	$('.hit-slider').slick({
		appendDots: $('.section-head__right--hit'),
		dotsClass: 'slick-dots__custom',
		dots: true,
		arrows: false,
		// autoplay: true,
		// autoplaySpeed: 5000,
		slidesToShow: 4,
		sladesToScroll: 1,
	});

	$('.articles-slider').slick({
		appendDots: $('.section-head__right--articles'),
		dotsClass: 'slick-dots__custom',
		dots: true,
		arrows: false,
		// autoplay: true,
		// autoplaySpeed: 5000,
		slidesToShow: 3,
		sladesToScroll: 1,
	});
	

	/* Scroll Top */
	$(window).scroll(function () {
		if ($(this).scrollTop() > $(this).height()) {
			$('.scrollup').addClass('active');
		} else {
			$('.scrollup').removeClass('active');
		}
	});
	$('.scrollup').click(function () {
		$('html, body').stop().animate({
			scrollTop: 0
		}, 'slow', 'swing');
	});

	/* Плавный скроллинг к якорю */
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html,body").animate({ scrollTop: $(_href).offset().top - 0 + "px" });
		return false;
	});

});