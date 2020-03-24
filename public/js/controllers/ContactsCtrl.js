angular.module('contatooh').controller('ContactsCtrl', function($scope){
  $scope.total = 0;
  $scope.increment = () => {
    $scope.total++;
  };

  $scope.contacts = [
    {_id: 1, name: 'Contato Exemplo 1', email: 'cont1@empresa.com.br'},
    {_id: 2, name: 'Contato Exemplo 2', email: 'cont2@empresa.com.br'},
    {_id: 3, name: 'Contato Exemplo 3', email: 'cont3@empresa.com.br'}
  ];

  $scope.filter = '';
});
