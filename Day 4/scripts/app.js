var myApp=angular.module("myApp",["ngRoute"]);

myApp.config(function($routeProvider) {

    $routeProvider
        .when('/',{
        templateUrl:'index.html'
    })
        .when('/colors', {
            templateUrl:' views/colors.html',
            controller:'ColorsController'
})
        .when('/forms', {
            templateUrl: 'views/form.html',
            controller: 'FormsController'
})

});
