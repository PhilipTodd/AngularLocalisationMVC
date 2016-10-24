angular.module('rb.select-all-on-focus', [])
  .directive('rbSelectAllOnFocus', function () {
      'use strict';

      return {
          restrict: 'A',
          scope: {
              rbSelectAllOnFocus: '=',
          },
          link: function (scope, element, attrs, ctrl) {
              element.on('focus', function () {
                  var domElement = element[0];
                  if (scope.rbSelectAllOnFocus &&
                      angular.isFunction(domElement.setSelectionRange)) {
                      domElement.setSelectionRange(0, domElement.value.length);
                  }
              });
          },
      };
  });
