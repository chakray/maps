import { Input, AfterViewInit, OnDestroy,
  ViewChild, ElementRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { Vendors, CmMapsConfig as MapsConfig } from './maps.config';
import { CmMapsLoader as Loader } from './maps.loader';

@Component({
  selector: 'cm-maps',
  templateUrl: './maps.tag.html',
  styleUrls: ['./maps.tag.sass']
})
export class CmMapsTag implements AfterViewInit, OnDestroy {
  @Input() origin = [0, 0];
  @Input() zoom = 8;
  @Input() vendor: Vendors;
  @ViewChild('map', { read: ElementRef }) map: ElementRef;
  cfg: MapsConfig;
  m: any;
  private sub: Subscription;
  get mapEl() {
    return this.map.nativeElement;
  }
  constructor(private ld: Loader) { }
  ngOnDestroy() {
    if (!this.sub) { return; }
    this.sub.unsubscribe();
  }
  ngAfterViewInit() {
    this.sub = this.ld.loadConfig(this.vendor).subscribe(cfg => {
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
