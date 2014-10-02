var dostPostApp = angular.module('dostPostApp',['ngRoute', 'ui.bootstrap']);

dostPostApp.config(function($routeProvider, $locationProvider)
{
    $routeProvider
        .when('/',
        {
            templateUrl: 'html/home.html'
         })
        .when('/profile',
         {
             templateUrl: 'html/profile.html'
          })
        .when('/album',
        {
           templateUrl: 'html/album.html'
        })
        .when('/thoughts',
         {
             templateUrl: 'html/thoughts.html'
          })
        .when('/dostPost',
        {
            templateUrl: 'html/dostPost.html'
         })
        .otherwise({ redirectTo: '/'});
})
