import { Injectable } from '@angular/core';
import { of, Subject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CmMapsLoaderMod as LoaderMod } from './maps.loader.mod';

export type Vendors = 'Gmaps' | 'Leaflet' | 'Unknown';

@Injectable({ providedIn: LoaderMod })
export class CmMapsConfig {
  loaded = false;
  vendor: Vendors = 'Unknown';
  api: any;
  tileHost = '';
  cfg$ = new Subject();
  constructor() {
    const cast = this.cfg$.subscribe(cfg => {
      this.merge(cfg);
      cast.unsubscribe();
    });
  }
  lazy(): Observable<CmMapsConfig> {
    return this.loaded ? of(this) : this.load();
  }
  load() {
    return this.cfg$.pipe(switchMap(cfg => {
      this.merge(cfg);
      return of(this);
    }));
  }
  private merge(cfg) {
    Object.assign(this, cfg);
    this.loaded = true;
  }
}
