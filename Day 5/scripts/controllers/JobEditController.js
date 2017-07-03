/**
 * Created by Laura.Petre on 7/3/2017.
 */

hrApp.controller('JobEditController', ['$scope', '$http', '$routeParams', '$location', 'JobService','CommonResourcesFactory'
    function ($scope, $http, $routeParams, $location, JobService,CommonResourcesFactory) {

        JobService.findById($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;
            }, function (err) {
                console.log("Error at jobs/findOne: " + err);
            });

        $scope.back = function () {
            $location.url('/jobList');
        }
        $scope.reset = function () {
            $scope.job = {};
        };
        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };
    }]);