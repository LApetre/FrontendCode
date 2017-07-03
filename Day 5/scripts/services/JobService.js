/**
 * Created by Laura.Petre on 7/3/2017.
 */
hrApp.service('JobService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findById: function (jobId) {
                return $http.get(CommonResourcesFactory.findOneJobUrl + jobId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            jobId:"0",
                            jobTitle:""
                        };
                    });
            }
        }
    }]
);