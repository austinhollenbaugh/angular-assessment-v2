angular.module('assessment')
  .controller('bioCtrl', function($scope, mainService, $stateParams) {

    mainService.getPetBio($stateParams.id).then(function(response) {
      console.log("bioCtrl response", response.data);
      $scope.dog = response.data;
    });

  });
