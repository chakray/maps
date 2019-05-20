import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CmMapsConfig as MapsConfig, CmMapsTag as Maps } from '@chakray/maps';

@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.tag.html',
  styleUrls: ['./demo.tag.sass'],
})
export class AppGmapsTag {
  @ViewChild(Maps) maps: Maps;
  constructor(
    private cfg: MapsConfig,
    private route: ActivatedRoute) {
    // route.queryParams.subscribe(q => {
    //   if (q.mapKey) {
    //     cfg.tileHost = 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=' + q.mapKey;
    //     cfg.cfg$.next(cfg);
    //   }
    // });
  }
}
