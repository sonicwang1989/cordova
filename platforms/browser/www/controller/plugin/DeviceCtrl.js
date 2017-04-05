var DeviceCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "设备信息";
        $scope.onBack = function () {
            $location.url("/index");
        }

        document.addEventListener("deviceready", function () {
            var deviceInfo = [];
            angular.forEach(device, function (item, i) {
                deviceInfo.push({
                    property: i,
                    value: item
                });
            });
            $scope.deviceInfo = deviceInfo;
            try {
                $scope.$apply();
            } catch (e) { }
        }, false);
    }];

DeviceCtrl.url = "/plugin/device";
DeviceCtrl.templateUrl = "./html/plugin/Device.html";