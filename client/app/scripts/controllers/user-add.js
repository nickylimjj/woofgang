'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserAddCtrl
 * @description
 * # UserAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserAddCtrl', function ($scope, Users, $location) {
    $scope.user = {};
    $scope.saveTransaction = function () {
        Users.post($scope.user).then(function () {
            $location.path('/users');
            console.log('added user');
        });
    };
  });
