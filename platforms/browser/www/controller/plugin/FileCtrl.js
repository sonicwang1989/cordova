var FileCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "设备信息";
        $scope.onBack = function () {
            $location.url("/index");
        }

        $scope.pathStack = [];
        $scope.files = [];

        var listFile = function (dir) {
            window.resolveLocalFileSystemURL(dir, function (fileSystem) {
                $scope.listDir(fileSystem);
            }, function () {
                alert("list file error at " + dir);
            });
        }

        document.addEventListener("deviceready", function () {
            listFile(cordova.file.applicationStorageDirectory);
        }, false);

        $scope.parentDir = function () {
            if ($scope.pathStack.length == 1) return;//根目录

            //删除当前
            $scope.pathStack.pop();

            //删除上级 重新加载
            var file = $scope.pathStack.pop();
            $scope.listDir(file);
        };

        $scope.listDir = function (file) {
            if (file.isFile) return;
            var reader = file.createReader();

            reader.readEntries(function (entries) {
                $scope.pathStack.push(file);
                $scope.files = entries;
                $scope.$apply();
            }, function () {
                alert("list dir error");
            });
        }
    }];

FileCtrl.url = "/plugin/file";
FileCtrl.templateUrl = "./html/plugin/File.html";