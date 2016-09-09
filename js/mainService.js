angular.module('assessment')
  .service('mainService', function($http) {
    this.test = 'everything works!';

    this.getPets = function() {
      return $http ({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/pets'
      }).then(function(response) {
        // console.log(response.data);
        return response.data;
      });
    };

    this.getPetBio = function(id) {
      return $http ({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/pets/' + id
      });
    };
  });
