import { Injectable, Inject } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CmMapsLoaderMod as LoaderMod } from './maps.loader.mod';
import { CmMapsConfig as MapsConfig } from './maps.config';

@Injectable({ providedIn: LoaderMod })
export class CmMapsLoader {
  tileHost?;
  cfgMap = {};
  constructor(
    @Inject(MapsConfig) private cfgList: MapsConfig[]) {
    this.cfgMap = cfgList.reduce((r, i) => {
      r[i.vendor] = i;
      return r;
    }, {});
  }
  loadConfig(vnd) {
    const cfg = this.cfgMap[vnd] || new MapsConfig();
    return cfg.lazy();
  }
  init(cfg, opts) {
    const fn = 'init' + cfg.vendor;
    return this[fn](cfg, opts);
  }
  initUnknown(...a) {
    console.warn('config vendor should be: Gmaps | Leaflet');
  }
  initGmaps(cfg, { el, origin, zoom }) {
    const { maps } = cfg.api;
    const [lat, lng, alt] = origin;
    return new maps.Map(el, { zoom, center: { lat, lng, alt } });
  }
  initLeaflet(cfg, { el, origin, zoom }) {
    const { api, tileHost } = cfg;
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
