angular.module('contatooh').controller('ContactsCtrl', function($scope, $resource){
  $scope.filter = '';
  $scope.contacts = [];
  $scope.totalContacts = 0;

  const Contacts = $resource('/contacts');

  Contacts.query(function(data) {
    $scope.contacts = data;
    $scope.totalContacts = data.length;

  },
  function(error) {
    console.error('It was not possible get data from server');
    console.error(error);

    alert('Ocorreu um erro inesperado! Por favor, tente novamente mais tarde.');
  });

});
