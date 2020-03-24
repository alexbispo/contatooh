angular.module('contatooh').controller('ContactsCtrl', function($scope, $http){
  $scope.contacts = [];

  $http.get('/contacts')
    .then(function(resp) {
      $scope.contacts = resp.data;
    }).catch(function(statusText) {
      console.error('It was not possible get data from server');
      console.log(statusText);
    });

  $scope.filter = '';
});
