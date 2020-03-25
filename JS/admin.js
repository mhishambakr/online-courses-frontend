var adminApp = angular.module('adminApp', []);

adminApp.controller('adminCtrl', function($scope){
    $scope.totalViews = 100000;
    $scope.currentViews = 200;
    $scope.reports = 2;
});

angular.bootstrap(document.getElementById("adminView1"), ['adminApp']);