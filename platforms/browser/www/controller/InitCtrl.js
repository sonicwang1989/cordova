var InitCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $rootScope.deviceReady = false;
        var load = function () {
            var deferred = $q.defer();
            setTimeout(function () {
                deferred.resolve();
            }, 2000);
            return deferred.promise;
        };
        document.addEventListener('deviceready', function () {
            load().then(function () {
                var parentElement = document.getElementById("deviceready");
                var listeningElement = parentElement.querySelector('.listening');
                var receivedElement = parentElement.querySelector('.received');

                listeningElement.setAttribute('style', 'display:none;');
                receivedElement.setAttribute('style', 'display:block;');

                $rootScope.deviceReady = true;
                $location.url("/index");
                $scope.$apply();
            });
        }, false);

        document.addEventListener("backbutton", function () {
            navigator.notification.confirm("确定要退出吗？", function (buttonIndex) {
                if (buttonIndex == 1) {
                    navigator.app.exitApp();
                }
            }, "confirm", ["确定", "取消"]);
        }, false);
    }];

InitCtrl.url = "/init";
InitCtrl.templateUrl = "./html/Init.html";