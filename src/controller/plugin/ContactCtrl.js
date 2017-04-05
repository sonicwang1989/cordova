var ContactCtrl = ['$rootScope', '$scope', '$location', '$window', '$timeout', '$q',
    function ($rootScope, $scope, $location, $window, $timeout, $q) {
        $scope.title = "通讯录";
        $scope.onBack = function () {
            $location.url("/index");
        }

        document.addEventListener("deviceready", function () {
            function onSuccess(contacts) {
                $scope.contacts = contacts;
                $scope.$apply();
            };

            function onError(contactError) {
                alert('onError!');
            };

            var options = new ContactFindOptions();
            options.filter = "";
            options.multiple = true;
            var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
            navigator.contacts.find(fields, onSuccess, onError, options);
            
        }, false);
    }];

ContactCtrl.url = "/plugin/contact";
ContactCtrl.templateUrl = "./html/plugin/Contact.html";