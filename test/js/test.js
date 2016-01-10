angular.module( 'test-app', [ 'my-module', 'ui.bootstrap' ] )
  .controller( 'TestCtrl', function( $uibModal, MyService ) {
    this.testAlertModal = function()  {
      $uibModal.alert( `It works. Service Value: ${MyService.testValue}` );
    };
  } );
