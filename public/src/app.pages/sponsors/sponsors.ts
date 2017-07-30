module app.pages {
  'use strict';

  class SponsorCtrl {
  }

  angular
    .module('app.pages')
    .config(($stateProvider: ng.ui.IStateProvider) => {
      $stateProvider.state('shell.sponsors', {
        url: '/sponsors',
        templateUrl: 'app.pages/sponsors/sponsors.html',
        controller: SponsorCtrl,
        controllerAs: 'vm'
      });
    });
}
