var BatteryCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "电池信息";
        $scope.onBack = function () {
            $location.url("/index");
        }

        window.addEventListener("batterystatus", function (status) {
            $scope.batteryStatus = status;
            try {
                $scope.$apply();
            } catch (e) { }
        }, false);
    }];

BatteryCtrl.url = "/plugin/battery";
BatteryCtrl.templateUrl = "./html/plugin/Battery.html";