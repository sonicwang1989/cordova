var VibrationCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "震动";
        $scope.onBack = function () {
            $location.url("/index");
        }

        $scope.vibrate = function () {
            navigator.vibrate(3000);
        };

        document.addEventListener("deviceready", function () {
            
        }, false);
    }];

VibrationCtrl.url = "/plugin/vibration";
VibrationCtrl.templateUrl = "./html/plugin/Vibration.html";