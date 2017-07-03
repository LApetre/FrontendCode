hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory','ManagerService','EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory,ManagerService, EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";
        $scope.departments=[];
        $scope.jobs=[];
        $scope.employees=[];
        $scope.managers= ManagerService.findManagers();
        //TODO #HR5
        $scope.employee={};

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        ManagerService.findJobs()
            .then(function (res) {
                $scope.jobs = res.data;
                console.log($scope.jobs);
            }, function (err) {
                console.log("Error at jobs: " + err);
            });
        ManagerService.findDep()
            .then(function (res) {
                $scope.departments = res.data;
                console.log($scope.departments);
            }, function (err) {
                console.log("Error at jobs: " + err);
            });
        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.save = function (addEmployee) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };
        $scope.delete = function () {
            $http({url: CommonResourcesFactory.deleteEmployeeUrl, method: 'DELETE', data: "stuff"})
                .success(function () {
                console.log("employee was deleted");
                });
        };



        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);