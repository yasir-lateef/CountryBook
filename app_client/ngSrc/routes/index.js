var router = angular.module('router', ['ngRoute']);

router.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : '/ngSrc/views/pages/home.html',
			controller : 'countriesController'
		})

		.when('/countries/:countryName', {
			templateUrl : '/ngSrc/views/pages/country.html',
			controller : 'countriesDetailController'
		})

		.when('/countries/:countryName/:attribName',{
			templateUrl : '/ngSrc/views/pages/attrib.html',
			controller : 'countriesAttribController'
		})

		.when('/regions',{
			templateUrl : '/ngSrc/views/pages/regions.html',
			controller : 'regionsController'
		})

		.when('/regions/:regionName',{
			templateUrl : '/ngSrc/views/pages/region.html',
			controller : 'regionsDetailController'
		})
		
		.when('/regions/:regionName/:subRegionName',{
			templateUrl : '/ngSrc/views/pages/subregion.html',
			controller : 'subregionsDetailController'
		})
});