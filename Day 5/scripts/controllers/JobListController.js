/**
 * Created by Laura.Petre on 7/3/2017.
 */
hrApp.controller('JobListController', ['$scope', '$http', '$location', 'CommonResourcesFactory','ManagerService',
    function ($scope, $http, $location, CommonResourcesFactory,ManagerService) {

        $scope.jobs = [];


        ManagerService.findJobs()
            .then(function (res) {
                $scope.jobs = res.data;
                console.log($scope.jobs);
            }, function (err) {
                console.log("Error at jobs: " + err);
            });
        console.log($scope.jobs);

        $scope.viewJob = function (jobId) {
            $location.url('/jobView/' + jobId);
        };

        $scope.editJob = function(jobId) {
            $location.url('/jobEdit/' + jobId);
        };
    }]);