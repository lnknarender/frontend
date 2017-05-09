/**
 * define all the dependencies ,controllers,services,filters,factories
 */
define([
    'require',
    'jquery',
    'jueryUI',
    'angular',
	'ngStorage',
    'directives/main',
    'services/main',
    'controllers/main',
    'filters/main',
    'routes',
    'properties/main',
    'angularUi',
	'angularUitpls',
	'angularGird',
    'translate',
    'moment',
    'jssorSlider',
    'jsSlider',
    'jquerySlider',
    'pdf',
    'canvas',
  
  ,
], function (require, $, jqueryui,angular, ngStorage, directives,services, controllers,filters, routes,properties,angularUi, angularUitpls, angularGird,pdf,canvas) {
    'use strict';    
    /**
     * Application definition
     * This is where the AngularJS application is defined and all application dependencies declared.
     * @type {module}
     */
    var custApp = angular.module('custApp', [
            'app.controllers', 
            'app.directives', 
            'app.services',
            'app.filters',
            'app.routes',
			'ngStorage',
			'ui.bootstrap',
			'ui.bootstrap.tpls',
			'pascalprecht.translate',
			'ui.grid',
		    'ui.grid.importer',
		    'ui.grid.rowEdit',
		    'ui.grid.edit',
		    'ui.grid.pagination'
        ]);
    
	custApp.run(['$rootScope', '$state', '$stateParams', 'loginService', '$location',
		function($rootScope, $state, $stateParams, loginService, $location) {
		  // it'll be done when the state it resolved.
		  $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
			$rootScope.dataLoading = true;
			// track the state the user wants to go to; authorization service needs this
			$rootScope.toState = toState;
			$rootScope.toStateParams = toStateParams;
			$rootScope.userlogged = false; // Setting user not logged by default
			$rootScope.userInfo = {};
			// do an authorization check immediately 
			// if Authentication flag has been set true in routing. otherwise load controller without checking,
			$rootScope.userInfo = loginService.getUserInfo();
			
			if(!$rootScope.userInfo) {
				
			}
			
		  });
		  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			//stop loading bar on stateChangeSuccess
			event.targetScope.$watch("$viewContentLoaded", function() {
				if(!!!$rootScope.dataStillLoading) {
					$rootScope.dataLoading = false;
				}
			});
		  });
		}
	  ]);
    /**
     * Main Controller
     * This controller is the top most level controller that allows for all
     * child controllers to access properties defined on the $rootScope.
     */
    custApp.controller('MainCtrl',['$scope', '$rootScope', '$location', "$localStorage", "$sessionStorage", function($scope, $rootScope, $location, $localStorage, $sessionStorage){
     
    	
    
    }]);
    
    window.custApp = custApp;
	
    //Return the application  object
    return custApp;
});