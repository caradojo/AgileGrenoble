module app.services {
  'use strict';

  export interface IHttpQueryParams {
    [key: string]: string | number | boolean;
  }

  export interface IHttpService {
    get<T>(url: string, query?: IHttpQueryParams): ng.IPromise<T>;
    post<T>(url: string, body?: any, query?: IHttpQueryParams): ng.IPromise<T>;
  }

  export class HttpService implements IHttpService {

    constructor(
      private $http: ng.IHttpService
    ) { }

    public get<T>(url: string, query?: IHttpQueryParams): ng.IPromise<T> {
      return this.$http.get<T>(url, { params: query })
        .then(this.handleSuccess);
    }

    public post<T>(url: string, body?: any, query?: IHttpQueryParams): ng.IPromise<T> {
      return this.$http.post<T>(url, body, { params: query })
        .then(this.handleSuccess);
    }

    private handleSuccess<T>(response: angular.IHttpPromiseCallbackArg<T>): T {
      return response.data;
    }
  }

  angular
    .module('app.services')
    .service('httpService', HttpService);
}
