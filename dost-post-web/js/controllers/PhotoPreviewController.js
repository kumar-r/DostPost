dostPostApp.controller('PhotoPreviewController', function($scope,$http)
{
	$scope.ImageLink = "images/1.jpg";
});

var PreviewCtrl = function()
{
	this.open = function($scope,$modal)
	{
		var modalInstance = $modal.open({
      									templateUrl: "photoPreview.html",
      									controller: ModalInstanceCtrl,
      									size: 'lg'
    								 });
			modalInstance.result.then(function (selection)
			{

    		});
	};
};

var ModalInstanceCtrl = function ($scope, $modalInstance) {

  $scope.ok = function ()
  {
    $modalInstance.close("ok");
  };
  $scope.Cancel = function ()
  {
    $modalInstance.close("cancel");
  };

};