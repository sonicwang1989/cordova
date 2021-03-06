var myApp = angular.module('myApp', [
    'ngRoute',
    'myService',
    'myConfig',
    'myDirective',
    'myFilters'
])
    .controller('MainCtrl', MainCtrl)
    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        //路由设置 =================================================
        //查找所有的控制器，并注册路由
        for (var key in window) {
            //判断是否是控制器
            if (key.substr(key.length - 4, 4).toLowerCase() != "ctrl") continue;
            var ctrl = window[key];
            //判断是否有路由
            if (!ctrl.url) continue;
            $routeProvider.when(ctrl.url, { templateUrl: ctrl.templateUrl, controller: ctrl });
        }
        //默认路由
        $routeProvider.otherwise({ redirectTo: '/init' });


        //HTTP异步设置 =============================================
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        var param = function (obj) {
            var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
            for (name in obj) {
                value = obj[name];
                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if (value !== undefined && value !== null)
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }
            return query.length ? query.substr(0, query.length - 1) : query;
        };

        // Override $http service's default transformRequest
        $httpProvider.defaults.transformRequest = [function (data) {
            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
        }];
    }
    ])
;
