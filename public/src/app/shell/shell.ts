module app {
  'use strict';

  angular
    .module('app')
    .config(($stateProvider: ng.ui.IStateProvider) => {
      $stateProvider.state('shell', {
        abstract: true,
        templateUrl: 'app/shell/shell.html'
      });
    });
}
