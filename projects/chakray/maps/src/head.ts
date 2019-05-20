import { Injectable } from '@angular/core';

import { CmMapsLoaderMod as LoaderMod } from './maps/maps.loader.mod';

@Injectable({ providedIn: LoaderMod })
export class Head {
  constructor() {
    console.warn('you need to provide your own head manipulation logics or use it from @chakray/utils');
  }
}
