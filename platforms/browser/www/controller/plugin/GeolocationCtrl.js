var GeolocationCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "定位";
        $scope.onBack = function () {
            $location.url("/index");
            navigator.geolocation.clearWatch($scope.watchID);
        }

        var geolocationSuccess = function (position) {
            $scope.position = position;
            $scope.$apply();
        };

        var geolocationError = function () {
            alert("获取位置失败");
        };

        var geolocationOptions = { timeout: 30000};

        document.addEventListener("deviceready", function () {
          $scope.watchID= navigator.geolocation.watchPosition(geolocationSuccess,
                geolocationError,
                geolocationOptions);
        }, false);
    }];

GeolocationCtrl.url = "/plugin/geolocation";
GeolocationCtrl.templateUrl = "./html/plugin/Geolocation.html";