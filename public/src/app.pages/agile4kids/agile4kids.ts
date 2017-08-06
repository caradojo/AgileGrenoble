module app.pages {
  'use strict';

  class Agile4KidsCtrl {
  }

  angular
    .module('app.pages')
    .config(($stateProvider: ng.ui.IStateProvider) => {
      $stateProvider.state('shell.agile4kids', {
        url: '/agile4kids',
        templateUrl: 'app.pages/agile4kids/agile4kids.html',
        controller: Agile4KidsCtrl,
        controllerAs: 'vm'
      });
    });
}
