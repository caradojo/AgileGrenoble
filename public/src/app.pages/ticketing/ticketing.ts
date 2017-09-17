module app.pages {
  'use strict';

  class TicketingCtrl {
  }

  angular
    .module('app.pages')
    .config(($stateProvider: ng.ui.IStateProvider) => {
      $stateProvider.state('shell.ticketing', {
        url: '/ticketing',
        templateUrl: 'app.pages/ticketing/ticketing.html',
        controller: TicketingCtrl,
        controllerAs: 'vm'
      });
    });
}
