/**
 * Created by Laura.Petre on 6/29/2017.
 */
hrApp.controller('UserViewController', ['$scope', '$http', '$routeParams', '$location','UserList',
    function($scope, $http, $routeParams, $location,UserList) {



        var User= function(firstname,lastname,email,phone,CNP,profession){
            this.firstname=firstname;
            this.lastname=lastname;
            this.email=email;
            this.phone=phone;
            this.CNP=CNP;
            this.profession=profession;
        }

        $scope.user = new User("","","","","","");
        $scope.userList=UserList;
        $scope.listShow=true;

        $scope.back = function() {
            $location.url('/');
        }
        $scope.reset = function() {
            $scope.user=new User("","","","","","");
        }
        $scope.save = function() {
            UserList.push($scope.user);
      //      $scope.userList.push($scope.user);
            alert("User was added: "+$scope.user.firstname+$scope.user.lastname);
            $scope.user=new User("","","","","","");
        }
        $scope.toggleShowList = function() {
            $scope.listShow=! ($scope.listShow);
        }

    }]);