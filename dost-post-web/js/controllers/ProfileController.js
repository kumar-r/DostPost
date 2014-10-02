dostPostApp.controller("ProfileController", function($scope, $location)
{
    console.log("you are in profile page");
    $scope.views = ['html/overview.html', 'html/work.html', 'html/education.html', 'html/personal.html', 'html/contact.html', 'html/about.html'];
    $scope.htmlView = $scope.views[0];
    $scope.panelHeader = 'Overview';

    $scope.setView = function($index)
    {
        console.log("setting view " +  $scope.views[$index]);
         $scope.htmlView = $scope.views[$index];
    };
     $scope.showAlbum = function()
     {
        $location.path("/album");
     };
     $scope.showThoughts = function()
      {
         $location.path("/thoughts");
      };
     $scope. showDostPost = function()
       {
          $location.path("/dostPost");
       };
});