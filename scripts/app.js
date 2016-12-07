var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider','$locationProvider','$provide', function ($routeProvider,$locationProvider,$provide){
  $provide.decorator('$sniffer', function($delegate) {
      $delegate.history = false;
      return $delegate;
  });
 $routeProvider
 .when('/', {
   	 templateUrl: 'scripts/views/home.html',
     controller: 'HomeController',
     activetab: 'home'
  })
 .when('/about', {
   	 templateUrl: 'scripts/views/about.html',
     activetab: 'about'
  })
 .when('/work', {
   	 templateUrl: 'scripts/views/projects.html',
     activetab: 'work',
     controller:'ProjectsController'
  })
 .when('/contact', {
   	 templateUrl: 'scripts/views/contact.html',
     activetab: 'contact',
     controller: 'ContactController'
  })
  .otherwise ({
     templateUrl:'scripts/views/404.html'
  });

  if(window.history && window.history.pushState){
    $locationProvider.html5Mode({ enabled: true, requireBase: false})
  }
  //$locationProvider.html5Mode({ enabled: true, requireBase: false})
  //$locationProvider.html5Mode(true)
}]);

app.run(function($rootScope) {
  $rootScope.globalFoo = function() {
      alert("I'm global foo!");
      //$rootScope.globalFoo();
  };
});
