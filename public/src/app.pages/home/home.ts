module app.pages {
  'use strict';

  // dont forget we need to execute this somewhere
  // for the lettering to work (JQuery & DOM needs to be loaded)
  // $("#os-phrases > h2")
  //   .css('opacity', 1)
  //   .lettering('words')
  //   .children("span")
  //   .lettering()
  //   .children("span")
  //   .lettering();

  class HomeCtrl {

    constructor(
      private $scope: ng.IScope,
      private $log: ng.ILogService,
      private koraliService: services.IKoraliService
    ) {
      koraliService.test3()
        .then((result: any) => {
          $log.debug(result);
          this.text = JSON.stringify(result);
        });
    }

    private text: string;
  }

  angular
    .module('app.pages')
    .config(($stateProvider: ng.ui.IStateProvider) => {
      $stateProvider.state('shell.home', {
        url: '/home',
        templateUrl: 'app.pages/home/home.html',
        controller: HomeCtrl,
        controllerAs: 'vm'
      });
    });
}
