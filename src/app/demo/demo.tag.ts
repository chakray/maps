import { Inject, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CmMapsConfig as MapsConfig } from '@chakray/maps';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.tag.html',
  styleUrls: ['./demo.tag.sass']
})
export class AppDemoTag {
  constructor(
    @Inject(MapsConfig) private cfgs: MapsConfig[],
    private route: ActivatedRoute) {
    route.queryParams.subscribe(q => {
      const cfg = cfgs.find(c => c.vendor === 'Leaflet');
      if (q.mapKey) {
        cfg.tileHost = 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=' + q.mapKey;
        cfg.cfg$.next(cfg);
      }
    });
  }
}
