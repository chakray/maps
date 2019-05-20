import { Injectable } from '@angular/core';

import { Head } from '@chakray/utils';
import { environment as env } from 'src/environments/environment';
import { CmMapsConfig as MapsConfig } from '@chakray/maps';

const gmapsInitFn = '__init_gmaps_api__';
const apiNs = 'google';

@Injectable()
export class GmapsConfig extends MapsConfig {
  // provide apis
  // api = { map, tileLayer };
  constructor(private head: Head) {
    super();
    this.vendor = 'Gmaps';
    const src = `https://maps.googleapis.com/maps/api/js?key=${env.gmapskey}&callback=` + gmapsInitFn;
    head.script({ async: true, defer: true, type: 'text/javascript', src });
    window[gmapsInitFn] = () => {
      this.api = window[apiNs];
      this.cfg$.next(this);
    };
  }
}
