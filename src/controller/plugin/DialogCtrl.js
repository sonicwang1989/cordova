var DialogCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "设备信息";
        $scope.onBack = function () {
            $location.url("/index");
        }

        $scope.alert = function () {
            navigator.notification.alert("这是alert", function () {
                alert("alertCallback");
            }, "alert", "确定");
        };

        $scope.confirm = function () {
            navigator.notification.confirm("这是confirm", function (buttonIndex) {
                alert("confirmCallback:" + buttonIndex);
            }, "confirm", ["确定","取消"])
        };

        $scope.prompt = function () {
            navigator.notification.prompt("这是prompt", function (results) {
                alert("promptCallback:" + results.buttonIndex + "    " + results.input1);
            }, "prompt", ["确定", "取消"], "prompt");
        };

        $scope.beep = function () {
            navigator.notification.beep(2);
        };


        document.addEventListener("deviceready", function () {
            alert("deviceready");
        }, false);
    }];

DialogCtrl.url = "/plugin/dialog";
DialogCtrl.templateUrl = "./html/plugin/Dialog.html";