import { Input, AfterViewInit, ViewChild, ElementRef, Component } from '@angular/core';

import { CmMapsLoader as Loader } from './maps.loader';

@Component({
  selector: 'cm-maps',
  templateUrl: './maps.tag.html',
  styleUrls: ['./maps.tag.sass']
})
export class CmMapsTag implements AfterViewInit {
  @Input() origin = [0, 0];
  @Input() zoom = 8;
  @ViewChild('map', { read: ElementRef }) map: ElementRef;
  private m: any;
  get mapEl() {
    return this.map.nativeElement;
  }
  constructor(private ld: Loader) { }
  ngAfterViewInit() {
    this.ld.loadConfig().subscribe(cfg => {
      this.m = this.ld.init(this.mapEl, this.origin, this.zoom);
    });
  }
}
