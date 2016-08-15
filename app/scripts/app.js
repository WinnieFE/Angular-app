'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage'
  ])
  .config(function ($routeProvider,$locationProvider) {

    $locationProvider.html5Mode(true);    // 配置后，在加载入口文件之后，地址栏会变为http://hostname/task，而不是http://hostname/#/task

    $routeProvider
      .when('/', {
        templateUrl: 'views/task/list.html',
        controller: 'TaskListCtrl',
        controllerAs: 'vm'
      })
      .when('/404',{
        templateUrl: '/404.html'
      })
      .when('/task/list', {
        templateUrl: 'views/task/list.html',
        controller: 'TaskListCtrl',
        controllerAs: 'vm'
      })
      .when('/task/detail', {
        templateUrl: 'views/task/detail.html',
        controller: 'TaskDetailCtrl',
        controllerAs: 'vm'
      })
      .when('/data', {
        templateUrl: 'views/data.html',
        controller: 'DataCtrl',
        controllerAs: 'vm'
      })
      .when('/myhome', {
        templateUrl: 'views/myhome.html',
        controller: 'MyHomeCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/404'
      });

     
  })
  .run(function($rootScope,$window,$timeout){
      $rootScope.goto = function(url){
        $window.location.href = url;
      }
  });
