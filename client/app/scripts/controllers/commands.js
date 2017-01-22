'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CommandsCtrl
 * @description
 * # CommandsCtrl
 * Controller of the clientApp
 */

 // SERVICES
angular.module('clientApp')
  .service('recogService', function () {
    this.transcript = "k";
});

// CONTROLLER
angular.module('clientApp')
  .controller('CommandsCtrl', ['$scope', 'recogService', function($scope,recogService) {
    this.commands = [
        {
            name: 'what is my total expenditure?',
            desc: 'Replies with current balance'
        },

        {
            name: 'purchases?',
            desc: 'replies number of purchases'
        },

    ];

    $scope.transcript = recogService.transcript;

    $scope.$watch('transcript', function() {
        recogService.transcript = $scope.transcript;
    });


    $scope.execRecog = function() {
        var recognition = new webkitSpeechRecognition();
        recognition.onresult = function(event) { 
            $scope.transcript = event.results[0][0].transcript;
            console.log($scope.transcript);
        };
        
        recognition.start();
    };

  }]);