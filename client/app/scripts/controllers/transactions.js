'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TransactionsCtrl
 * @description
 * # TransactionsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TransactionsCtrl', function (
    $scope,
    Transactions) {
    console.log('hi');
    this.transactions = Transactions.getList().$object;
  });
