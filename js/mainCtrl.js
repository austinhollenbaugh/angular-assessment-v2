angular.module('assessment')
  .controller('mainCtrl', function($scope, mainService) {
    $scope.test = mainService.test;

   $scope.pets = mainService.getPets().then(function(response) {
      // console.log(response);
      $scope.dogs = response;
    });

  });
