angular.module('surveyCreator')
 .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, survey) {

  $scope.survey = survey;

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});