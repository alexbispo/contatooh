angular.module('contatooh').controller('ContatosController', ($scope) => {
  $scope.total = 0;
  $scope.increment = () => {
    $scope.total++;
  };
});
