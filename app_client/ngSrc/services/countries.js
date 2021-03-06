var countriesService = angular.module('countriesService', []);

countriesService.factory('countries', function($http){
	return {
		list : function(callback){
			$http({
				method : 'GET',
				url : '/api/countries/all',
				cache : false
			}).success(callback);
		},
		find : function(countryName, callback){
			$http({
				method : 'GET',
				url : '/api/countries/'+countryName,
				cache : false
			}).success(callback);
		},
		findAttribute : function(countryName, attribName, callback){
			$http({
				method : 'GET',
				url : '/api/countries/'+countryName+'/'+attribName,
				cache : false
			}).success(callback);
		}
	};
});