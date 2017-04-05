var InappbrowserCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "内置浏览器";
        $scope.onBack = function () {
            $location.url("/index");
        }

        $scope.open = function () {
            var ref = cordova.InAppBrowser.open(encodeURI("http://www.baidu.com"), "_blank", "location=yes");
        };

        document.addEventListener("deviceready", function () {
            
        }, false);
    }];

InappbrowserCtrl.url = "/plugin/inappbrowser";
InappbrowserCtrl.templateUrl = "./html/plugin/Inappbrowser.html";