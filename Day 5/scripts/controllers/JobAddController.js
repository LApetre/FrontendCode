/**
 * Created by Laura.Petre on 7/3/2017.
 */

hrApp.controller('JobAddController', ['$scope', '$http', '$routeParams', '$location','CommonResourcesFactory',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory) {
        $scope.job={};
        $scope.addVar=true;

        $scope.back = function () {
            $location.url('/jobList');
        }

        $scope.create = function (addJob) {
            console.log(addJob);
            $http({
                url: CommonResourcesFactory.addJobUrl,
                method: 'POST',
                data: addJob})
                .success(function (data) {
                    $scope.job= data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };
        $scope.reset = function () {
            $scope.job = {};
        };
    }]);