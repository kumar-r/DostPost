dostPostApp.controller('PhotoController', function($scope,$http, $modal)
{
	console.log("you are in photo controller");
	$scope.previewPhoto = function()
    {
         var preview = new PreviewCtrl();
         preview.open($scope,$modal);
    }
});