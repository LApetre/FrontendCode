/**
 * Created by Laura.Petre on 6/30/2017.
 */
myApp.controller("ColorsController",["$scope",function($scope)
{
    $scope.myClass="";
    $scope.colors=[
        {
            "text":"muted",
            "class":"text-muted",
            "type":"strong"
        },
    {
        "text":"primary",
        "class":"primary-text",
        "type":"strong"
    },
    {
        "text":"succes",
        "class":"succes-text",
        "type":"strong"
    },
    {
        "text":"info",
        "class":"text-info",
        "type":"boring"
    },
    {
        "text":"warning",
        "class":"text-warning",
        "type":"boring"
    },
    {
        "text":"danger",
        "class":"text-danger",
        "type":"boring"
    }
    ];

$scope.myColor={};

$scope.changeColor=function(){
    $scope.myClass=$scope.myColor.class;
};
}]);