hrApp.controller('MathController', ['$scope','MathService', function ($scope, MathService) {
    $scope.a = 0;
    $scope.b = 0;

    $scope.calculate = function () {
        $scope.op1 = MathService.add($scope.a,$scope.b)
        $scope.op2 = MathService.substract($scope.a,$scope.b)
        $scope.op3 = MathService.mul($scope.a,$scope.b)
        $scope.op4 = MathService.div($scope.a,$scope.b)

    }

}]);
