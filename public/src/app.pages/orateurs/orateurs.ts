module app.pages {
  'use strict';

  class OrateursCtrl {
  }

  angular
    .module('app.pages')
    .config(($stateProvider: ng.ui.IStateProvider) => {
      $stateProvider.state('shell.orateurs', {
        url: '/orateurs',
        templateUrl: 'app.pages/orateurs/orateurs.html',
        controller: OrateursCtrl,
        controllerAs: 'vm'
      });
    });
}
