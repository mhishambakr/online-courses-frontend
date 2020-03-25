var userApp = angular.module('userApp', []);

userApp.controller('userCtrl', function ($scope) {
    $scope.users = [
        {
            id: 1,
            name: 'Mohamed Hisham',
            email: 'mohisham@gmail.com',
            password: '123',
            claimed_points: 100,
            unclaimed_points: 30,
            is_admin: false,
            is_disabled: false
        },
        {
            id: 2,
            name: 'Hassan Ali',
            email: 'hassan@gmail.com',
            password: '123',
            claimed_points: 100,
            unclaimed_points: 30,
            is_admin: false,
            is_disabled: false
        },
        {
            id: 3,
            name: 'Youssef Hisham',
            email: 'jo@gmail.com',
            password: '123',
            claimed_points: 100,
            unclaimed_points: 30,
            is_admin: false,
            is_disabled: false
        },
        {
            id: 4,
            name: 'Amr Mohamed',
            email: 'amr@gmail.com',
            password: '123',
            claimed_points: 100,
            unclaimed_points: 30,
            is_admin: false,
            is_disabled: true
        },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: true },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: true },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
        { id: 4, name: 'name', email: 'name@gmail.com', password: '123', claimed_points: 100, unclaimed_points: 30, is_admin: false, is_disabled: false },
    ];
    $scope.disabledUsers = 0;
    $scope.users.forEach(user => {
        if (user.is_disabled) {
            $scope.disabledUsers += 1;
        }
    });
});


angular.bootstrap(document.getElementById("userView1"), ['userApp']);
angular.bootstrap(document.getElementById("userView2"), ['userApp']);