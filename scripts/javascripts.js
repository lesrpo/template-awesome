$(document).ready(function(){
	$('.navbar-nav>li>a.active').removeClass('active');
    $('.navbar-nav>li:first>a').addClass('active');

	$('.banner-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  centerMode: true,
	});

	$('.works-slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 6000,
	  dots:true,
	  arrows:true,
	  nextArrow: '<i class="fa fa-angle-right"></i>',
	  prevArrow: '<i class="fa fa-angle-left"></i>',
	  appendArrows:$('.work-slider-arrows'),
	  responsive: [
		{
		  breakpoint: 900,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 450,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		}
		]
	});
	$('.blog-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows:false,
		dots:true,
	});
});

$(function(){
    
    $('.navbar-nav>li>a').on('click', function() {

	    var scrollAnchor = $(this).attr('data-scroll'),
	        scrollPoint  = $('section[id="'+scrollAnchor+'"]').offset().top - 28;

	                      
	   $('body,html').animate({
	       scrollTop: scrollPoint
	   }, 500);
	    
	   return false;

	})
	$(window).scroll(function() {
	    var windscroll = $(window).scrollTop();
	    if (windscroll > 0) {
	        $(".navbar-default").addClass("sticky-nav navbar-fixed-top");
	        $('section.section').each(function(i) {
	            if ($(this).position().top <= windscroll + 50) {
	                $('.navbar-nav>li>a.active').removeClass('active');
	                $('.navbar-nav>li>a').eq(i).addClass('active');
	            }
	        });

	    } else {

	        $(".navbar-default").removeClass("sticky-nav navbar-fixed-top");
	        $('.navbar-nav>li>a.active').removeClass('active');
	        $('.navbar-nav>li>a:first').addClass('active');
	    }


	}).scroll();
    

});