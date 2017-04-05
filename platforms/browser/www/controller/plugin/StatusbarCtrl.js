var StatusbarCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "状态栏";
        $scope.onBack = function () {
            $location.url("/index");
        }

        $scope.show = function () {
            StatusBar.show();
        };

        $scope.hide = function () {
            StatusBar.hide();
        };

        document.addEventListener("deviceready", function () {
        }, false);
    }];

StatusbarCtrl.url = "/plugin/statusbar";
StatusbarCtrl.templateUrl = "./html/plugin/Statusbar.html";