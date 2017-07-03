hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'ManagerService',
    function ($scope, $http, $location, CommonResourcesFactory, ManagerService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";
        $scope.departments = [];
        $scope.jobs = [];
        $scope.employees = [];
        $scope.managers = ManagerService.findManagers();

        $scope.reset = function () {
            $scope.employee = {};
        };
/*
        ManagerService.findJobs()
            .then(function (res) {
                $scope.jobs = res.data;
                console.log($scope.jobs);
            }, function (err) {
                console.log("Error at jobs: " + err);
            });
            */

        $http({url: CommonResourcesFactory.findAllDepartmentsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.departments = data;
            });

        $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

        $scope.create = function (addEmployee) {
            console.log(addEmployee);
            $http({
                url: CommonResourcesFactory.addEmployeeUrl,
                method: 'POST',
                data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;

    }]);