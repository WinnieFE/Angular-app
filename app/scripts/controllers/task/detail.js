'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:TaskDetailCtrl
 * @description
 * # TaskDetailCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('TaskDetailCtrl', function ($scope,$location,$timeout) {
  
  	var id = $location.search().id;
  	console.log(id)

  	var taskList = [{
        id:1,
    	theme_id: 0,	// HTML5页面
    	thumb_url: '/images/task/summer.png',
    	title: '夏季香奈儿大促销，万件商品一律十元一律十元，走过路过不要错过',
    	progress: '50%',
    	dateline: 1473436800,	// 2016-09-10
    	sum_redcoin:10000,
    },{
        id:2,
    	theme_id: 1,	// 微信图文消息
    	thumb_url: '/images/task/baby.png',
    	title: '[关爱贴士]孕期对胎儿健康有伤害的八个生活细节有哪些？',
    	progress: '32%',
    	dateline: 1472745600,	// 2016-09-2
    	sum_redcoin:5000,
    },{
        id:3,
    	theme_id: 0,	
    	thumb_url: '/images/task/summer.png',
    	title: '夏季香奈儿大促销，万件商品一律十元一律十元，走过路过不要错过',
    	progress: '46.8%',
    	dateline: 1473436800,	// 2016-09-10
    	sum_redcoin:10000,
    },{
        id:4,
    	theme_id: 1,	
    	thumb_url: '/images/task/baby.png',
    	title: '[关爱贴士]孕期对胎儿健康有伤害的八个生活细节有哪些？',
    	progress: '20.8%',
    	dateline: 1470758400,	// 2016-08-10
    	sum_redcoin:5000,
    }];

    $timeout(function(){
    	var now = (new Date().getTime())/1000;
    	var d;
    	for(var i = 0; i< taskList.length;i++){
    		if(taskList[i].dateline < now){
    			taskList[i].days = -1;
    		}else{
    			d = Math.floor((taskList[i].dateline - now) / 24 /3600);
    			taskList[i].days = d;
    		}
    	}
    },500);

    $scope.taskDetail = taskList[id - 1];
  });
