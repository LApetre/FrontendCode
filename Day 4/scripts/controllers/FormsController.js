/**
 * Created by Laura.Petre on 6/30/2017.
 */
myApp.controller("FormsController",["$scope",function($scope)
{
$scope.show=true;
$scope.myInput="";
$scope.showErr=function()
{
    if($scope.myInput=="") $scope.show=true;
    else $scope.show=false;
};
$scope.submitMe=function(a)
{
    if(a) alert("Form was submitted and is valid!");
}


}]);