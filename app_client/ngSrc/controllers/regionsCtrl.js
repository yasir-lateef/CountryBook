var regionsCtrl = angular.module('regionsCtrl', ['ngRoute', 'regionsService']);

regionsCtrl.controller('regionsController', function($scope, regions){
	regions.list(function(regionsList){
		$scope.regions = regionsList;
	})
});

regionsCtrl.controller('regionsDetailController', function($scope, $routeParams, regions){
	regions.find($routeParams.regionName, function(response){
		$scope.countriesByRegion = response.countriesbyRegion;
		$scope.header = {
			title : $routeParams.regionName
		};
	})
});

regionsCtrl.controller('subregionsDetailController', function($scope, $routeParams, regions){
	regions.findSubregion($routeParams.regionName, $routeParams.subRegionName, function(countriesList){
		$scope.countriesBySubregion = countriesList;
		$scope.header = {
			title : {
				regionName : $routeParams.regionName,
				subRegionName : $routeParams.subRegionName			
			}
		};
	})
});