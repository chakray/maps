import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ChHeroMod, heroConfig, ChMarkedTabTag as MarkedTag } from '@chakray/hero';
import { Head } from '@chakray/utils';

import { CmMapsMod, CmMapsConfig } from '@chakray/maps';
import { LmapsConfig } from './demo/lmaps.config';
import { GmapsConfig } from './demo/gmaps.config';

import { SetupLoader } from './loader';
import { heroCfg } from './app.config';
import { AppDemoTag } from './demo/demo.tag';
import { AppGmapsTag } from './demo/gmaps.tag';

const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'gmaps'
}, {
  path: 'setup', component: MarkedTag, resolve: { loader: SetupLoader }
}, {
  path: 'leaflet', component: AppDemoTag
}, {
  path: 'gmaps', component: AppGmapsTag
}, {
  path: '**', pathMatch: 'full', redirectTo: '/'
}];

@NgModule({
  declarations: [
    AppGmapsTag,
    AppDemoTag
  ],
  imports: [
    CmMapsMod,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ChHeroMod,
  ],
  providers: [
  Head,
  {
    provide: heroConfig, useValue: heroCfg
  }, {
    provide: CmMapsConfig, useClass: GmapsConfig, multi: true
  }, {
    provide: CmMapsConfig, useClass: LmapsConfig, multi: true
  }],
  exports: [
    ChHeroMod,
    RouterModule
  ]
})
export class AppRouting { }
