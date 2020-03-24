angular.module('contatooh').controller('ContactCtrl', function($scope, $routeParams){
  $scope.contactId = $routeParams.contactId;
});
