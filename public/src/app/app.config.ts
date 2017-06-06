module app {
  'use strict';

  export interface IAppConfig {
    korali: {
      endpoint: string;
      conference: {
        nickname: string;
      };
      edition: {
        nickname: string;
      };
    };
  }

  let appConfig: IAppConfig = {
    korali: {
      endpoint: 'https://api.kora.li/api/v1/',
      conference: {
        nickname: 'AGILEGRENOBLE'
      },
      edition: {
        nickname: 'AG2017'
      }
    }
  };

  angular
    .module('app')
    .constant('config', appConfig)
    .config((
      $urlRouterProvider: ng.ui.IUrlRouterProvider,
      $translateProvider: ng.translate.ITranslateProvider
    ) => {
      // default router route
      $urlRouterProvider.otherwise('/home');
      // translation config
      $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/',
        suffix: '.json'
      });

      $translateProvider.preferredLanguage('fr_FR');
      // https://angular-translate.github.io/docs/#/guide/19_security
      $translateProvider.useSanitizeValueStrategy('escape');
    });
}
