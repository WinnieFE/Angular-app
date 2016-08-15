'use strict';

/**
 * @ngdoc directive
 * @name angularAppApp.directive:numberFilter
 * @description
 * # numberFilter
 */
angular.module('angularAppApp')
  .directive('numberFilter', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      require: '?ngModel'
      link: function postLink(scope, element, attrs,ctrl) {
        // element.text('this is the numberFilter directive');
        // 输入时格式化千分位
         if (!ctrl) return;

            ctrl.$formatters.unshift(function (a) {
                return $filter(attrs.format)(ctrl.$modelValue)
            });


            ctrl.$parsers.unshift(function (viewValue) {
                var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
                elem.val($filter(attrs.format)(plainNumber));
                return plainNumber;
            });
        }
    };
  });
