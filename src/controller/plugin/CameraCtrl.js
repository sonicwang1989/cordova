var CameraCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "相机插件";
        $scope.onBack = function () {
            $location.url("/index");
        }
        $scope.isReady = false;

        document.addEventListener("deviceready", function () {
            console.log(navigator.camera);
            $scope.isReady = true;
        }, false);

        $scope.openCamera = function () {
            if ($scope.isReady == false) return;

            navigator.camera.getPicture(function (data) {
                $scope.imgSource = "data:image/jpeg;base64," + data;
                $scope.$apply();
            }, function () {
                alert(JSON.stringify(arguments));
                }, {
                    destinationType: Camera.DestinationType.DATA_URL //返回数据格式base64  DATA_URL
                })
        };

        //$scope.openCamera = function () {
        //    if ($scope.isReady == false) return;
        //};
    }];

CameraCtrl.url = "/plugin/camera";
CameraCtrl.templateUrl = "./html/plugin/Camera.html";