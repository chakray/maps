import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CmMapsLoaderMod as LoaderMod } from './maps.loader.mod';
import { CmMapsConfig as MapsConfig } from './maps.config';

@Injectable({ providedIn: LoaderMod })
export class CmMapsLoader {
  tileHost?;
  constructor(private cfg: MapsConfig) {}
  loadConfig() {
    return this.cfg.lazy();
  }
  init(el, origin, zoom) {
    const fn = 'init' + this.cfg.vendor;
    return this[fn](el, origin, zoom);
  }
  initUnknown() {
    console.warn('config vendor should be: Google | Leaflet');
  }
  initLeaflet(el, origin, zoom) {
    const { api, tileHost } = this.cfg;
    const m = api.map(el, { attributionControl: null })
      .setView(origin, zoom);
    if (!tileHost) { return m; }
    api.tileLayer(tileHost, {
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      crossOrigin: true
    }).addTo(m);
    return m;
  }
}
