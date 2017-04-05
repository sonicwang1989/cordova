var IndexCtrl = [
    '$rootScope', '$scope','$routeParams','$location', '$window', '$timeout','$q',
    function ($rootScope, $scope, $routeParams, $location, $window, $timeout,$q ) {
        $scope.title = "插件测试";
        $scope.jump = function (url) {
            $location.url(url);
        }
    }];

IndexCtrl.url = "/index";
IndexCtrl.templateUrl = "./html/Index.html";