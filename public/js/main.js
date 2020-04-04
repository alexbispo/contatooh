angular.module('contatooh', ['ngRoute', 'ngResource'])
  .config(function($routeProvider) {
    $routeProvider.when('/contacts', {
      templateUrl: 'partials/contacts.html',
      controller: 'ContactsCtrl'
    });

    $routeProvider.when('/contacts/:contactId', {
      templateUrl: 'partials/contact.html',
      controller: 'ContactCtrl'
    });

    $routeProvider.when('/404', {
      templateUrl: 'partials/404.html',
      controller: 'NotFoundCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/404'});
});
