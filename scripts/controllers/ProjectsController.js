app.controller("ProjectsController", ['$scope','$location','$route', function($scope,$location,$route){
	$scope.$route = $route;
	setTimeout(function(){
	$('.project-slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  autoplay: true,
	  autoplaySpeed: 6000,
	  asNavFor: '.project-slider-nav'
	});
	
	$('.project-slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  asNavFor: '.project-slider-for',
	  dots: true,
	  centerMode: true,
	  autoplay: true,
	  autoplaySpeed: 6000,
	  focusOnSelect: true,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
		    slidesToShow: 4,
			slidesToScroll: 4
		  }
		},
		{
		  breakpoint: 800,
		  settings: {
		    slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
		    slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	}, 0);
}]);