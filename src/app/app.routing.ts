import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ChHeroMod, heroConfig, ChMarkedTabTag as MarkedTag } from '@chakray/hero';

import { CmMapsMod, CmMapsConfig } from '@chakray/maps';
import { LmapsConfig as CustomConfig } from './demo/lmaps.config';

import { SetupLoader } from './loader';
import { heroCfg } from './app.config';
import { AppDemoTag } from './demo/demo.tag';

const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'setup'
}, {
  path: 'setup', component: MarkedTag, resolve: { loader: SetupLoader }
}, {
  path: 'demo', component: AppDemoTag
}, {
  path: '**', pathMatch: 'full', redirectTo: '/'
}];

@NgModule({
  declarations: [
    AppDemoTag
  ],
  imports: [
    CmMapsMod,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ChHeroMod,
  ],
  providers: [{
    provide: heroConfig, useValue: heroCfg
  }, {
    provide: CmMapsConfig, useClass: CustomConfig
  }],
  exports: [
    ChHeroMod,
    RouterModule
  ]
})
export class AppRouting { }
