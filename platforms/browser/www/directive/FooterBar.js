myDirective.directive("footerBar", function () {
    return {
        restrict: 'E',
        templateUrl: 'html/directive/footer/footerbar.html',
        controller: ['$scope', '$element', '$route', function ($scope, $element, $route) {

        }]
    }
});