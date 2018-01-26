// Create a new module
angular.module('myAppModule', []);

// configure the module with a controller
angular.module('myAppModule').controller('MyFilterDemoCtrl', function($scope) {
    var someData = {
        firstName: 'Serkan',
        surname: 'GUnaydin',
        dateJoined: new Date(2010, 2, 23),
        consumption: 123.659855,
        plan: 'super-basic-plan',
        monthlyUsageHistory: [123.659855,
            89.645222,
            97.235644,
            129.555555,
            188.699855,
            65.652545,
            123.659855,
            89.645222,
            97.235644,
            129.555555,
            188.699855,
            65.652545
        ]
    };
    $scope.data = someData;

});

// configure the module with a filter
angular.module('myAppModule').filter('stripDashes', function() {
    return function(txt) {
        return txt.split('-').join(' ');
    };
});

angular.module('myAppModule').filter("toTitleCase", function() {
    return function(str) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
});