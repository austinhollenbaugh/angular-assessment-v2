angular.module('assessment')
  .directive('petDir', function() {
    return {
      restrict: 'EA',
      templateUrl: '../views/pet-tmpl.html',
      scope: {
        pet: '='
      },
      controller: function($scope, mainService) {
        $scope.showImage = false;
        $scope.showLink = true;
      }
    };
  });
