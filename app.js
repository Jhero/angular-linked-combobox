angular.module('multiComboBoxApp', [])

.service('Cities', ['$http', function($http) {
    return $http.get('cities.json');
}])

.controller('MainController', ['$scope', 'Cities', function($scope, Cities) {
    $scope.countries = [{'id' : 'ID', 'name' : 'Indonesia'}, {'id' : 'US', 'name' : 'USA'}];
    $scope.cities = [];

    $scope.change = function(id){
        Cities.success(function(response){
            if (response.length !== 0) {
                var result = [];
                response.forEach(function(value){
                    if (value.countryId === id){
                        result.push({'id' : value.cityId, 'name' : value.cityName})
                    }
                });
                $scope.cities = result;
            }
        })
    }
}]);