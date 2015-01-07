'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.alerts = [
			{
				icon:'glyphicon-user',
				color:'btn-success',
				total:'20,403',
				description:'TOTAL CUSTOMERS'
			},
			{
				icon:'glyphicon-calendar',
				color:'btn-primary',
				total:'8,382',
				description:'NEW CUSTOMER IN 24H'
			},
			{
				icon:'glyphicon-edit',
				color:'btn-info',
				total:'85,000',
				description:'EMAILS SENT'
			},
			{
				icon:'glyphicon-eye-open',
				color:'btn-warning',
				total:'268',
				description:'FOLLOW UP REQUIRED'
			},
			{
				icon:'glyphicon-flag',
				color:'btn-danger',
				total:'348',
				description:'REFFERALS TO MODERATE'
			},
			{
				icon:'glyphicon-bookmark',
				color:'btn-success',
				total:'545',
				description:'REFFERALS TO MODERATE'
			}
		];
	}
]);
