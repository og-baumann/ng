var app = angular.module('app', []);

app.controller('mcgForm', function($scope, $http) {

    $scope.start = {
        firstName : '',
        lastName : '',
        dob : '',
        gender : ''
    }

    $http.get("/api").then(function(res){ $scope.patients = res.data; });

    $scope.maxAge = (function(){
        var d = new Date().toISOString().split("T")[0];
        d = d.split('');
        --d[d.length - 1];
        return d.join('');
    })();

    $scope.submit = function() {
        $http.put("/api", {
            fn : $scope.pt.firstName,
            ln : $scope.pt.lastName,
            gd : $scope.pt.gender,
            db : $scope.pt.dob.toISOString().split('T')[0]
        }).then(function(res) {
            $scope.pt = angular.copy($scope.start);
            $http.get("/api").then(function(res){ $scope.patients = res.data; });
        }, function(err) {
            console.log(err);
        });
    }
    
});