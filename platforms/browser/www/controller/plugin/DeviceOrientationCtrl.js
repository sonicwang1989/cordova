var DeviceOrientationCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "方向传感器";
        $scope.onBack = function () {
            $location.url("/index");
            navigator.compass.clearWatch($scope.watchID);
        }


        function compassSuccess(heading) {
            $scope.heading = heading;
            $scope.$apply();
        };

        function compassError(compassError) {
            alert('Compass error: ' + compassError.code);
        };

        var compassOptions = {
            frequency: 1000
        }; 

        document.addEventListener("deviceready", function () {
            $scope.watchID = navigator.compass.watchHeading(compassSuccess, compassError, compassOptions);
        }, false);
    }];

DeviceOrientationCtrl.url = "/plugin/deviceorientation";
DeviceOrientationCtrl.templateUrl = "./html/plugin/DeviceOrientation.html";