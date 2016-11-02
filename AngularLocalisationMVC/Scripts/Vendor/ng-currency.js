!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("angular")):"function"==typeof define&&define.amd?define("ng-currency",["angular"],n):"object"==typeof exports?exports["ng-currency"]=n(require("angular")):e["ng-currency"]=n(e.angular)}(this,function(e){return function(e){function n(u){if(r[u])return r[u].exports;var o=r[u]={exports:{},id:u,loaded:!1};return e[u].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=e,n.c=r,n.p="",n(0)}([function(e,n,r){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=r(2),i=u(o),t=r(1),a=u(t),l=i["default"].module("ng-currency",[]);l.directive("ngCurrency",a["default"]),n["default"]=l.name},function(e,n){"use strict";function r(e,n){return{require:"ngModel",link:function(r,u,o,i){function t(){if(g){var e=void 0;if(i.$options&&"blur"===i.$options.updateOn){e=i.$viewValue;for(var n=i.$parsers.length-1;n>=0;n--)e=i.$parsers[n](e)}else e=i.$$rawModelValue;for(var r=i.$formatters.length-1;r>=0;r--)e=i.$formatters[r](e);i.$viewValue=e,i.$render()}}function a(){if(i.$validate(),g){var e=l(i.$$rawModelValue);e!==i.$$rawModelValue&&(i.$setViewValue(e.toFixed(R)),i.$commitViewValue(),t())}}function l(e){return v&&(void 0!==p&&e>p?e=p:void 0!==$&&e<$&&(e=$)),e}function c(e){return RegExp("\\d|\\-|\\"+e,"g")}function d(e){return RegExp("\\-{0,1}((\\"+e+")|([0-9]{1,}\\"+e+"?))&?[0-9]{0,"+R+"}","g")}function f(r){r=String(r);var u=n.NUMBER_FORMATS.DECIMAL_SEP,o=null;r.indexOf(n.NUMBER_FORMATS.DECIMAL_SEP)===-1&&r.indexOf(".")!==-1&&R>0&&(u=".");var i=e("currency")("-1",s(),R),t=RegExp("[0-9."+n.NUMBER_FORMATS.DECIMAL_SEP+n.NUMBER_FORMATS.GROUP_SEP+"]+"),a=i.replace(t.exec(i),""),l=r.replace(t.exec(r),"");return a===l&&(r="-"+t.exec(r)),RegExp("^-[\\s]*$","g").test(r)&&(r="-0"),c(u).test(r)&&(o=r.match(c(u)).join("").match(d(u)),o=o?o[0].replace(u,"."):null),o}function s(){return void 0===x?n.NUMBER_FORMATS.CURRENCY_SYM:x}var v=void 0,$=void 0,p=void 0,x=void 0,M=void 0,g=!0,R=2;o.$observe("ngCurrency",function(e){g="false"!==e,g?t():(i.$viewValue=i.$$rawModelValue,i.$render())}),o.$observe("hardCap",function(e){v="true"===e,a()}),o.$observe("min",function(e){$=e?Number(e):void 0,a()}),o.$observe("max",function(e){p=e?Number(e):void 0,a()}),o.$observe("currencySymbol",function(e){x=e,t()}),o.$observe("ngRequired",function(e){M=e,a()}),o.$observe("fraction",function(e){R=e||2,t(),a()}),i.$parsers.push(function(e){return g&&[void 0,null,""].indexOf(e)===-1?(e=f(e),e=l(Number(e))):e}),i.$formatters.push(function(n){return g&&[void 0,null,""].indexOf(n)===-1?e("currency")(n,s(),R):n}),i.$validators.min=function(e){return!(M||[void 0,null,""].indexOf(e)===-1&&!isNaN(e))||(!g||[void 0,null].indexOf($)!==-1||isNaN($)||e>=$)},i.$validators.max=function(e){return!(M||[void 0,null,""].indexOf(e)===-1&&!isNaN(e))||(!g||[void 0,null].indexOf(p)!==-1||isNaN(p)||e<=p)},i.$validators.fraction=function(e){return!g||!e||!isNaN(e)},r.$on("currencyRedraw",function(){a(),t()}),u.bind("focus",function(){if(g){var r=new RegExp("\\"+n.NUMBER_FORMATS.GROUP_SEP,"g"),o=[void 0,null,""].indexOf(i.$$rawModelValue)===-1?e("number")(i.$$rawModelValue,R).replace(r,""):i.$$rawModelValue;i.$viewValue!==o&&(i.$viewValue=o,i.$render(),u.triggerHandler("focus"))}}),u.bind("blur",t)}}}r.$inject=["$filter","$locale"],Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=r},function(n,r){n.exports=e}])});
//# sourceMappingURL=ng-currency.js.map

//import angular from 'angular';
//import ngCurrency from './ng-currency.directive.js';

//const module = angular.module('ng-currency', []);

//module.directive('ngCurrency', ngCurrency);

//export default module.name;


///* @ngInject */
//export default function ngCurrency($filter, $locale) {
//    return {
//        require: 'ngModel',
//        link: (scope, element, attrs, controller) => {
//            let hardCap, min, max, currencySymbol, ngRequired;
//            let active = true;
//            let fraction = 2;

//            attrs.$observe('ngCurrency', (value) => {
//                active = (value !== 'false');
//                if (active) {
//                    reformat();
//                } else {
//                    controller.$viewValue = controller.$$rawModelValue;
//                    controller.$render();
//                }
//            });
//            attrs.$observe('hardCap', (value) => {
//                hardCap = (value === 'true');
//                revalidate();
//            });
//            attrs.$observe('min', (value) => {
//                min = value ? Number(value) : undefined;
//                revalidate();
//            });
//            attrs.$observe('max', (value) => {
//                max = value ? Number(value) : undefined;
//                revalidate();
//            });
//            attrs.$observe('currencySymbol', (value) => {
//                currencySymbol = value;
//                reformat();
//            });
//            attrs.$observe('ngRequired', (value) => {
//                ngRequired = value;
//                revalidate();
//            });
//            attrs.$observe('fraction', (value) => {
//                fraction = value || 2;
//                reformat();
//                revalidate();
//            });

//            controller.$parsers.push((value) => {
//                if (active && [undefined, null, ''].indexOf(value) === -1) {
//                    value = clearValue(value);
//                    value = keepInRange(Number(value));
//                    return value;
//                }
//                return value;
//            });

//            controller.$formatters.push((value) => {
//                if (active && [undefined, null, ''].indexOf(value) === -1) {
//                    return $filter('currency')(value, getCurrencySymbol(), fraction);
//                }
//                return value;
//            });

//            controller.$validators.min = (value) => {
//                if (!ngRequired && ([undefined, null, ''].indexOf(value) !== -1 || isNaN(value))) {
//                    return true;
//                }
//                return !active ||
//                  [undefined, null].indexOf(min) !== -1 || isNaN(min) ||
//                  value >= min;
//            };

//            controller.$validators.max = (value) => {
//                if (!ngRequired && ([undefined, null, ''].indexOf(value) !== -1 || isNaN(value))) {
//                    return true;
//                }
//                return !active ||
//                  [undefined, null].indexOf(max) !== -1 || isNaN(max) ||
//                  value <= max;
//            };

//            controller.$validators.fraction = (value) => {
//                return !active || !value || !isNaN(value);
//            };

//            function reformat() {
//                if (active) {
//                    let value;
//                    if (controller.$options && controller.$options.updateOn === 'blur') {
//                        value = controller.$viewValue;
//                        for (let i = controller.$parsers.length - 1; i >= 0; i--) {
//                            value = controller.$parsers[i](value);
//                        }
//                    } else {
//                        value = controller.$$rawModelValue;
//                    }
//                    for (let i = controller.$formatters.length - 1; i >= 0; i--) {
//                        value = controller.$formatters[i](value);
//                    }
//                    controller.$viewValue = value;
//                    controller.$render();
//                }
//            }

//            function revalidate() {
//                controller.$validate();
//                if (active) {
//                    const value = keepInRange(controller.$$rawModelValue);
//                    if (value !== controller.$$rawModelValue) {
//                        controller.$setViewValue(value.toFixed(fraction));
//                        controller.$commitViewValue();
//                        reformat();
//                    }
//                }
//            }

//            function keepInRange(value) {
//                if (hardCap) {
//                    if (max !== undefined && value > max) {
//                        value = max;
//                    } else if (min !== undefined && value < min) {
//                        value = min;
//                    }
//                }
//                return value;
//            }

//            scope.$on('currencyRedraw', () => {
//                revalidate();
//                reformat();
//            });

//            element.bind('focus', () => {
//                if (active) {
//                    const groupRegex = new RegExp(`\\${$locale.NUMBER_FORMATS.GROUP_SEP}`, 'g');
//                    const value = [undefined, null, ''].indexOf(controller.$$rawModelValue) === -1 ? $filter('number')(controller.$$rawModelValue, fraction).replace(groupRegex, '') : controller.$$rawModelValue;
//                    if (controller.$viewValue !== value) {
//                        controller.$viewValue = value;
//                        controller.$render();
//                        element.triggerHandler('focus');
//                    }
//                }
//            });

//            element.bind('blur', reformat);

//            // TODO: Rewrite this parsing logic to more readable.

//            function decimalRex(dChar) {
//                return RegExp('\\d|\\-|\\' + dChar, 'g');
//            }

//            function clearRex(dChar) {
//                return RegExp('\\-{0,1}((\\' + dChar + ')|([0-9]{1,}\\' + dChar + '?))&?[0-9]{0,' + fraction + '}', 'g');
//            }

//            function clearValue(value) {
//                value = String(value);
//                let dSeparator = $locale.NUMBER_FORMATS.DECIMAL_SEP;
//                let cleared = null;

//                if (value.indexOf($locale.NUMBER_FORMATS.DECIMAL_SEP) === -1 &&
//                  value.indexOf('.') !== -1 &&
//                  fraction > 0) {
//                    dSeparator = '.';
//                }

//                // Replace negative pattern to minus sign (-)
//                const neg_dummy = $filter('currency')('-1', getCurrencySymbol(), fraction);
//                const neg_regexp = RegExp('[0-9.' + $locale.NUMBER_FORMATS.DECIMAL_SEP + $locale.NUMBER_FORMATS.GROUP_SEP + ']+');
//                const neg_dummy_txt = neg_dummy.replace(neg_regexp.exec(neg_dummy), '');
//                const value_dummy_txt = value.replace(neg_regexp.exec(value), '');

//                // If is negative
//                if (neg_dummy_txt === value_dummy_txt) {
//                    value = '-' + neg_regexp.exec(value);
//                }

//                if (RegExp('^-[\\s]*$', 'g').test(value)) {
//                    value = '-0';
//                }

//                if (decimalRex(dSeparator).test(value)) {
//                    cleared = value.match(decimalRex(dSeparator))
//                      .join('').match(clearRex(dSeparator));
//                    cleared = cleared ? cleared[0].replace(dSeparator, '.') : null;
//                }

//                return cleared;
//            }

//            function getCurrencySymbol() {
//                return currencySymbol === undefined ? $locale.NUMBER_FORMATS.CURRENCY_SYM : currencySymbol;
//            }
//        }
//    };
//}


