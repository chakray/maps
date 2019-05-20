import { NgModule } from '@angular/core';

import { CmMapsTag } from './maps.tag';

import { CmMapsLoaderMod } from './maps.loader.mod';

@NgModule({
  imports: [CmMapsLoaderMod],
  declarations: [CmMapsTag],
  exports: [CmMapsLoaderMod, CmMapsTag],
})
export class CmMapsMod { }
