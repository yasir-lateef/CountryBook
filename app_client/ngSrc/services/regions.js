var regionsService = angular.module('regionsService', []);

regionsService.factory('regions', function($http){
	return {
		list : function(callback){
			$http({
				method : 'GET',
				url : '/api/regions/all',
				cache : true
			}).success(callback);
		},
		find : function(regionName, callback){
			$http({
				method : 'GET',
				url : `/api/regions/${regionName}`,
				cache : true
			}).success(callback);
		},
		findSubregion : function(regionName, subregionName, callback){
			$http({
				method : 'GET',
				url : `/api/regions/${regionName}/${subregionName}`,
				cache : true
			}).success(callback);
		},
	};
});