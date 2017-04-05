var NetworkCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "网络";
        $scope.onBack = function () {
            $location.url("/index");
        }

        document.addEventListener("deviceready", function () {
            var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN] = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI] = 'WiFi connection';
            states[Connection.CELL_2G] = 'Cell 2G connection';
            states[Connection.CELL_3G] = 'Cell 3G connection';
            states[Connection.CELL_4G] = 'Cell 4G connection';
            states[Connection.CELL] = 'Cell generic connection';
            states[Connection.NONE] = 'No network connection';

            alert("网络状态：" + states[networkState]);
        }, false);

        document.addEventListener("online", function () {
            alert("网络已连接")
        }, false);

        document.addEventListener("offline", function () {
            alert("网络已断开")
        }, false);
    }];

NetworkCtrl.url = "/plugin/network";
NetworkCtrl.templateUrl = "./html/plugin/Network.html";