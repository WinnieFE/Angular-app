'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MyHomeCtrl
 * @description
 * # MyHomeCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MyHomeCtrl', function ($scope) {
    	$scope.user = {
    		name: '彼岸冰',
    		img_url: '/images/myhome/user.jpg',
    		task_num: 20,
    		sum_redcoin: 500,
    	};
  });
