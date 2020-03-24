angular.module('contatooh').controller('ContactsCtrl', function($scope){
  $scope.total = 0;
  $scope.increment = () => {
    $scope.total++;
  };
});
