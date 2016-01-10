import angular from 'angular';

import myModule from 'my-module';

import 'angular-bootstrap';

export let source = 'test-app';

let module = angular.module( source, [
    myModule.name, 'ui.bootstrap'
  ] )
  .controller( 'TestCtrl', function( $uibModal, MyService ) {
    this.testAlertModal = () => {
      $uibModal.alert( `It works. Service Value: ${MyService.testValue}` );
    };
  } );

export default module;
