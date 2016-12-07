app.controller("ProjectsController", ['$scope','$location','$route', function($scope,$location,$route){
	$scope.$route = $route;

	$('.project-slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.project-slider-nav'
	});
	
	$('.project-slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.project-slider-for',
	  dots: true,
	  centerMode: true,
	  arrows: true,
	  focusOnSelect: true,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
		    slidesToShow: 4
		  }
		},
		{
		  breakpoint: 800,
		  settings: {
		    slidesToShow: 2
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
		    slidesToShow: 1
		  }
		}
		]
	});
}]);