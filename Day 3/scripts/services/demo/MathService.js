hrApp.service('MathService', function () {
        return {
            add: function ( a, b) {
                return a+b;
            },
            substract: function ( a, b) {
                return a-b;
            },
            mul: function( a, b){
                return a*b;
            },
            div: function( a, b){
                return a/b;
            }
        }
    }
);