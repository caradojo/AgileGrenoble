module app.services {
  'use strict';

  /**
   * @see https://api.kora.li/
   */
  export interface IKoraliService {
    test1(): ng.IPromise<any>;
    test2(): ng.IPromise<any>;
    test3(): ng.IPromise<any>;
    test4(): ng.IPromise<any>;
  }

  export class KoraliService implements IKoraliService {

    constructor(
      private httpService: IHttpService,
      private config: IAppConfig
    ) { }

    test1(): ng.IPromise<any> {
      return this.httpService.get(
        this.config.korali.endpoint + 'app/conferences/'
      );
    }

    test2(): ng.IPromise<any> {
      return this.httpService.get(
        this.config.korali.endpoint + 'app'
        + '/conferences/' + this.config.korali.conference.nickname
      );
    }

    test3(): ng.IPromise<any> {
      return this.httpService.get(
        this.config.korali.endpoint + 'app'
        + '/conferences/' + this.config.korali.conference.nickname
        + '/editions/' + this.config.korali.edition.nickname
      );
    }

    test4(): ng.IPromise<any> {
      return this.httpService.get(
        this.config.korali.endpoint + 'public'
        + '/conferences/' + this.config.korali.conference.nickname
        + '/editions/' + this.config.korali.edition.nickname
        + '/programe'
      );
    }
  }

  angular
    .module('app.services')
    .service('koraliService', KoraliService);
}
