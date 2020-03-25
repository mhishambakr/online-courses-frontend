angular.module('seeMoreFilter', []).filter('seemore', function () {
    return function (description) {
        var newDesc = description.slice(0, -3) + '....';
        return newDesc;
    };
});
