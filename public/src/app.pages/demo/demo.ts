module app.pages {
  'use strict';

  export interface IDemoCtrl { }

  export class DemoCtrl implements IDemoCtrl {
    constructor(
      private $scope: ng.IScope,
      private demoService: services.IDemoService
    ) { }
  }

  angular
    .module('app.pages')
    .controller('demoCtrl', DemoCtrl)
    .config(($stateProvider: ng.ui.IStateProvider) => {
      $stateProvider.state('shell.demo', {
        url: '/demo',
        templateUrl: 'app.pages/demo/demo.html',
        controller: DemoCtrl,
        controllerAs: 'demoCtrlVM'
      });
    });
}
