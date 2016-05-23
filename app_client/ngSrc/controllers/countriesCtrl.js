var countriesCtrl = angular.module('countriesCtrl', ['ngRoute', 'countriesService']);


countriesCtrl.controller('countriesController', function($scope, countries){
	countries.list(function(countries){
		$scope.countries = countries;
	});
});

countriesCtrl.controller('countriesDetailController', function($scope, $routeParams, $http, countries){
	countries.find($routeParams.countryName, function(country){
		$scope.country = country;
		$scope.isArray = Array.isArray;
		$scope.borders = [],
		$scope.languages = [];
		
		var borderCountries = country.borders;
		
		// for(var i=0; i < borderCountries.length; i++){
		for(var item in borderCountries){
		  $http({
				method: 'GET',
				url : '/api/isocountrycodes/search?attr=code&value='+borderCountries[item],
				cache : true
			}).success(function(res){
				$scope.borders.push(res);
			});
		}
		for(var lang in country.languages){
		  $http({
				method: 'GET',
				url : '/api/isolanguagecodes/search?attr=code&value='+country.languages[lang],
				cache : true
			}).success(function(res){
				$scope.languages.push(res);
			});
		}
	})
});

countriesCtrl.controller('countriesAttribController', function($rootScope, $scope, $routeParams, countries){
	countries.findAttribute($routeParams.countryName, $routeParams.attribName, function(res){
		$scope.countryName = $routeParams.countryName;
		$scope.attribName = $routeParams.attribName;
		$scope.response = res;
		$scope.host = $rootScope.host;
	});
});