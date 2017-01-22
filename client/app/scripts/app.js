'use strict';

// MODULE
var clientApp = angular.module('clientApp', [
    'ngResource',
    'ngRoute',
    'restangular'
  ]);

clientApp.config(function ($routeProvider, RestangularProvider) {
    // connect to mongodb
    RestangularProvider.setBaseUrl('http://localhost:3000');
      // get capital one stuff
      //RestangularProvider.setBaseUrl('http://api.reimaginebanking.com/accounts/58839c6a1756fc834d8eb80e/purchases');
      //RestangularProvider.setDefaultHeaders({"content-type": "application/json"});
      //RestangularProvider.setDefaultRequestParams({key: "b44062f25a859f93cab578edb3508c8d"});

      // ROUTES
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/commands', {
        templateUrl: 'views/commands.html',
        controller: 'CommandsCtrl',
        controllerAs: 'commands'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/verify', {
        templateUrl: 'views/verify.html',
        controller: 'VerifyCtrl',
        controllerAs: 'verify'
      })
      .when('/create/transaction', {
        templateUrl: 'views/transaction-add.html',
        controller: 'TransactionAddCtrl',
        controllerAs: 'transactionAdd'
      })
      .when('/account/:id/delete', {
        templateUrl: 'views/transaction-delete.html',
        controller: 'TransactionDeleteCtrl',
        controllerAs: 'transactionDelete'
      })
      .when('/create/user', {
        templateUrl: 'views/user-add.html',
        controller: 'UserAddCtrl',
        controllerAs: 'userAdd'
      })
      .when('/user/:id', {
        templateUrl: 'views/user-view.html',
        controller: 'UserViewCtrl',
        controllerAs: 'userView'
      })
      .when('/user/:id/delete', {
        templateUrl: 'views/user-delete.html',
        controller: 'UserDeleteCtrl',
        controllerAs: 'userDelete'
      })
      .when('/user/:id/edit', {
        templateUrl: 'views/user-edit.html',
        controller: 'UserEditCtrl',
        controllerAs: 'userEdit'
      })
      .when('/user/:id/transactions', {
        templateUrl: 'views/transactions.html',
        controller: 'TransactionsCtrl',
        controllerAs: 'transactions'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  
  .factory('UsersRestangular', function (Restangular) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setRestangularFields({
                id: '_id'
            });
        });
    })
    
  .factory('Users', function(UsersRestangular) {
        return UsersRestangular.service('users');
    });

