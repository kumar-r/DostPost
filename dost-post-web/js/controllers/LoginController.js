dostPostApp.controller("LoginController", function($scope, $location)
{
    console.log("you are in login page");
    $scope.doLogin = function()
    {
        $location.path("/profile");
    };
});