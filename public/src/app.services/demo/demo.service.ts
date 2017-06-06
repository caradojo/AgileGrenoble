module app.services {
  'use strict';

  export interface IDemoService {
    toggleExcited(): void;
    isExcited(): boolean;
  }

  export class DemoService implements IDemoService {
    private excited: boolean = false;

    toggleExcited(): void {
      this.excited = !this.excited;
    }

    isExcited(): boolean {
      return this.excited;
    }
  }

  angular
    .module('app.services')
    .service('demoService', DemoService);
}
