var DeviceMotionCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "运动传感器";
        $scope.onBack = function () {
            $location.url("/index");
            navigator.accelerometer.clearWatch(watchID);
        }
        $scope.watchID = null;

        var accelerometerSuccess = function (acceleration) {
            $scope.acceleration = acceleration;
            $scope.$apply();
        };

        var accelerometerError = function () {
            alert(JSON.stringify(arguments));
        };

        var accelerometerOptions = {
            frequency: 1000 // 没秒获取一次
        };

        document.addEventListener("deviceready", function () {
            $scope.watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess, accelerometerError, accelerometerOptions);
        }, false);
    }];

DeviceMotionCtrl.url = "/plugin/devicemotion";
DeviceMotionCtrl.templateUrl = "./html/plugin/DeviceMotion.html";