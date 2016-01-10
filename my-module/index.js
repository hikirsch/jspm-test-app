import angular from 'angular';

import 'angular-bootstrap';

import MyService from './MyService';
import $uibModalDecorator from './$uibModalDecorator';

export let moduleName = 'my-module';

let module = angular.module( moduleName, [ 'ui.bootstrap' ] )
  .decorator('$uibModal', $uibModalDecorator )
  .service('MyService', MyService );

export default module;
