var AutoUpdateCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "自动更新";
        $scope.onBack = function () {
            $location.url("/index");
        }

        $scope.fetchUpdate = function () {
            var options = {
                'config-file': 'http://192.168.148.245:8080/chcp.json'
            };

            var updateCallback = function (error, data) {
                if (error) {
                    return alert(JSON.stringify(error));
                }
                else {
                    alert(JSON.stringify(data));
                }

            };

            chcp.fetchUpdate(updateCallback, options);
        };

        $scope.installUpdate = function () {
            var installationCallback = function () {
                alert("更新安装完成");
            };

            var callbackMethod = function (error, data) {
                if (error) {
                    alert("没有更新");
                    return;
                }

                alert('当前版本： ' + data.currentVersion + " 新版本：" + data.readyToInstallVersion);

                chcp.installUpdate(installationCallback);
            };

            chcp.isUpdateAvailableForInstallation(callbackMethod);
        };

        document.addEventListener("chcp_updateIsReadyToInstall", function () {
            alert("准备安装更新");
        }, false);
    }];

AutoUpdateCtrl.url = "/plugin/autoupdate";
AutoUpdateCtrl.templateUrl = "./html/plugin/AutoUpdate.html";