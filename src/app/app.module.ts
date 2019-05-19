import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChHeroMod, heroConfig } from '@chakray/hero';
import { AppComponent } from './app.component';

export const heroCfg = {
  mod: 'chakray/maps',
  synopsis: 'angular wrapper of maps js apis',
  tabs: [{ link: 'setup', text: 'Setup' },
         { link: 'demo', text: 'Demo - icon' }]
         // { link: 'icon', text: 'Demo - icon2' }]
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    ChHeroMod,
    BrowserModule
  ],
  providers: [{
    provide: heroConfig, useValue: heroCfg
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
