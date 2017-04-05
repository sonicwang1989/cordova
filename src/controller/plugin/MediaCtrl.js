var MediaCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "媒体";
        $scope.onBack = function () {
            $location.url("/index");
        }

        document.addEventListener("deviceready", function () {
            alert("mediaready");
        }, false);
    }];

MediaCtrl.url = "/plugin/media";
MediaCtrl.templateUrl = "./html/plugin/Media.html";