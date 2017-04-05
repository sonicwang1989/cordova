var MsgPushCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.msg = "斯人若彩虹 遇上方知有";
        $scope.pushMsg = function () {
            var msgObj = {
                "platform": "all",
                "audience": "all",
                "notification": {
                    "android": {
                        "alert": $scope.msg,
                        "title": "推送测试",
                        "builder_id": 1
                    }
                }
            };
            var header = cordovaHTTP.getBasicAuthHeader("00cf91a98776501acfc1e111", "24f83146e4882bae3ba257b0");
            var onSuccess = function (response) {
                if (response.status == 200) return window.plugins.toast.show("推送成功", "3000", "center")
                alert(JSON.stringify(response));
            };
            var onError = function (response) {
                alert(JSON.stringify(response));
            };
            cordovaHTTP.post("https://api.jpush.cn/v3/push", msgObj, header, onSuccess, onError);
        }

        $scope.onBack = function () {
            $location.url("/index");
        }
    }];

MsgPushCtrl.url = "/plugin/msgpush";
MsgPushCtrl.templateUrl = "./html/plugin/MsgPush.html";