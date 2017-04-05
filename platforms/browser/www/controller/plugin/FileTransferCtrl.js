var FileTransferCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "文件传输";
        $scope.onBack = function () {
            $location.url("/index");
        }

        $scope.download = function () {
            window.requestFileSystem(window.TEMPORARY, 50 * 1024 * 1024, function (fs) {
                var url = 'http://sw.bos.baidu.com/sw-search-sp/software/1b5bc4ffa7d9b/ChromeStandalone_57.0.2987.133_Setup.exe';
                fs.root.getFile('ChromeStandalone_57.0.2987.133_Setup.exe', { create: true, exclusive: false }, function (fileEntry) {
                    var fileTransfer = new FileTransfer();
                    var fileURL = fileEntry.toURL();

                    fileTransfer.download(
                        url,
                        fileURL,
                        function (entry) {
                            alert("下载完成");
                        },
                        function (error) {
                            alert("下载失败");
                        },
                        null, 
                        {}
                    );
                }, function () {
                    alert("onErrorCreateFile")
                });

            }, function () {
                alert("requestFileSystem error")
            });
        };

        document.addEventListener("deviceready", function () {

        }, false);
    }];

FileTransferCtrl.url = "/plugin/filetransfer";
FileTransferCtrl.templateUrl = "./html/plugin/FileTransfer.html";