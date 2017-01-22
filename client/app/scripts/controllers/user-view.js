'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserViewCtrl
 * @description
 * # UserViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserViewCtrl', function (
    $scope,
    $routeParams,
    Users) {
    $scope.viewUser = true;
    $scope.user = Users.one($routeParams.id).get().$object;
    $scope.transactions = Users.getList().$object;
    console.log($scope.transactions);
  });
