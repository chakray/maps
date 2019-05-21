import { Input, AfterViewInit, ViewChild, ElementRef, Component } from '@angular/core';

import { Vendors, CmMapsConfig as MapsConfig } from './maps.config';
import { CmMapsLoader as Loader } from './maps.loader';

@Component({
  selector: 'cm-maps',
  templateUrl: './maps.tag.html',
  styleUrls: ['./maps.tag.sass']
})
export class CmMapsTag implements AfterViewInit {
  @Input() origin = [0, 0];
  @Input() zoom = 8;
  vendor: Vendors;
  @ViewChild('map', { read: ElementRef }) map: ElementRef;
  cfg: MapsConfig;
  m: any;
  get mapEl() {
    return this.map.nativeElement;
  }
  constructor(private ld: Loader) { }
  ngAfterViewInit() {
    this.ld.loadConfig(this.vendor).subscribe(cfg => {
      const opts = {
        el: this.mapEl,
        origin: this.origin,
        zoom: this.zoom
      };
      this.cfg = cfg;
      this.m = this.ld.init(cfg, opts);
    });
  }
}
