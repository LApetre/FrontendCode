/**
 * Created by Laura.Petre on 7/3/2017.
 */
hrApp.service('ManagerService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findManagers: function () {
                var managerIds=[];
                var realManagers=[];
                $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function (data) {
                        angular.forEach(data,function(value)
                        {
                            if(value.managerId)
                            if(managerIds.indexOf(value.managerId["employeeId"])== -1)
                            {
                                managerIds.push(value.managerId["employeeId"]);
                                realManagers.push(value.managerId);
                            }
                        });

                    });

                return realManagers;
            },
            findJobs: function() {
                return $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
                    .success(function (data, status, headers, config) {
                        return data;
                    });
            },
            findDep: function() {
                return $http({url: CommonResourcesFactory.findAllDepartmentsUrl, method: 'GET'})
                    .success(function (data, status, headers, config) {
                        return data;
                    });
            }
        }
    }]
);