
var myapp = angular.module('myapp',[]);

myapp.controller('maincontroller',['$scope','$log','$filter','$timeout',function($scope,$log,$filter,$timeout){

   $scope.name='arjuna';
   $scope.modiefyName = $filter('uppercase')($scope.name);
   $timeout(function(){
     $scope.name='Krishna';
   },1000);

}]);



/*var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
}]);*/
New Angular 1.3 Branch got Created for doing Some more Research about it.

For the Heck of the Conflicts for second time.

Don't undestand?
