// TODO load ngRoute module
//var hrApp = angular.module('hrApp', []);
var hrApp = angular.module('hrApp', ['ngRoute']);

hrApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/employeeList', {
                templateUrl: 'views/employeeList.html',
                controller: 'EmployeeListController'
            })
            .when('/jobList', {
                templateUrl: 'views/jobsList.html',
                controller: 'JobListController'
            })
            .when('/employeeView/:employeeId', {
                templateUrl: 'views/employeeView.html',
                controller: 'EmployeeViewController'
            })
            .when('/jobView/:jobId', {
                templateUrl: 'views/jobView.html',
                controller: 'JobViewController'
            })
            .when('/employeeAdd', {
                templateUrl: 'views/employeeAdd.html',
                controller: 'EmployeeAddController'
            })
            .when('/employeeEdit/:employeeId', {
                templateUrl: 'views/employeeEdit.html',
                controller: 'EmployeeEditController'
            })
            .when('/jobEdit/:jobId', {
                templateUrl: 'views/jobEdit.html',
                controller: 'JobEditController'
            })
            .when('/jobAdd', {
                templateUrl: 'views/jobEdit.html',
                controller: 'JobAddController'
            })
            .otherwise({
                templateUrl: 'views/main.html',
                controller: 'MainController'
            });
    }]).run(['$rootScope',
        function ($rootScope) {
            // TODO
        }
    ]);