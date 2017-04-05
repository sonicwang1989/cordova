myDirective.directive("headerBar", function () {
    return {
        restrict: 'E',
        scope: {
            title: "=",
            backBtnVisiable: "=",
            onBack: "&"
        },
        templateUrl: 'html/directive/header/headerbar.html',
        controller: ['$scope', '$element', '$route', function ($scope, $element, $route) {

        }]
    }
});

