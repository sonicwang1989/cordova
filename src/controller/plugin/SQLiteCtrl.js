var SQLiteCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "SQL Lite";
        $scope.onBack = function () {
            $location.url("/index");
            if ($scope.db) {
                $scope.db.close(function () {
                    console.log("db closed successfully");
                }, function () {
                    console.log("db closed failure");
                    console.log(arguments);
                });
            }
        }

        $scope.db = null;
        $scope.newItem = "";

        var getRows = function () {
            var defered = $q.defer();
            $scope.db.executeSql("SELECT * FROM Records", [], function (resultSet) {
                var rows = [];
                for (var i = 0; i < resultSet.rows.length; i++) {
                    rows.push(resultSet.rows.item(i));
                }
                defered.resolve(rows);
            });
            return defered.promise;
        }

        var load = function () {
            return getRows().then(function (rows) {
                $scope.records = rows;
            });
        };

        document.addEventListener("deviceready", function () {
            try {
                $scope.db = window.sqlitePlugin.openDatabase({ name: 'demo.db', location: 'default' });
                $scope.db.sqlBatch([
                    'CREATE TABLE IF NOT EXISTS Records (Item)'
                ], function () {
                    load();
                }, function (error) {
                    console.log('Populate table error: ' + error.message);
                });
            } catch (e) {
                alert(JSON.stringify(e));
            }
        }, false);

        $scope.addNewRecord = function () {
            $scope.db.executeSql('INSERT INTO Records VALUES (?)', [$scope.newItem], function () {
                load().then(function () {
                    $scope.newItem = "";
                });
            });
        };

    }];

SQLiteCtrl.url = "/plugin/sqlite";
SQLiteCtrl.templateUrl = "./html/plugin/SQLite.html";