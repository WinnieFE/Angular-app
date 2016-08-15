'use strict';

/**
 * @ngdoc directive
 * @name angularAppApp.directive:navTab
 * @description
 * # navTab
 */
angular.module('angularAppApp')
  .directive('navTab', function ($rootScope) {
	return {
	  scope: {
		tab: '@?',	// @表示字符串，?表示没有传值tab也不会出错
	  },
	  templateUrl: 'views/directives/navTabs.html',
	  restrict: 'E',
	  replace: true,
	  // transclude: true,
	  link: function postLink($scope, element, attrs) {
		// element.text('this is the navTab directive');
		$scope.tabs = [{
			name:'task',
			iconClass:'glyphicon glyphicon-tasks',
			title:'任务',
			url:'/task/list'
		},{
			name:'data',
			iconClass:'glyphicon glyphicon-stats',
			title:'数据',
			url:'/data'
		},{
			name:'myhome',
			iconClass:'glyphicon glyphicon-user',
			title:'我的',
			url:'myhome'
		}
		];

		$scope.clickTab = function(tab,event){
			if (event){
				event.stopPropagation();
			}

			if(tab.sub_tabs && tab.sub_tabs.length){
				for ( var i = 0; i < $scope.tabs.length; i++){
					if($scope.tabs[i].$show && $scope.tabs[i] != tab){
						$scope.tabs[i].$show = false;
					}
				}
				tab.$show = !tab.$show;
			}else{
				$scope.tab = tab.name;
				if(tab.url){
					$rootScope.goto(tab.url);
				}
			}
		}



		$scope.$watch('tab', function(newValue) {
			for (var i = 0; i < $scope.tabs.length; i++) {
				if ($scope.tabs[i].name == $scope.tab) {
					$scope.tabs[i].isActive = true;
				} else {
					$scope.tabs[i].isActive = false;
				}
			}
		});
	  }
	};
  });
