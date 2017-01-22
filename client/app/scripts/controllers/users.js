'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UsersCtrl', function (
    $scope, Users) {
    this.users = Users.getList().$object;
  });
