import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Spec } from '@chakray/utils/testing';

import { CmMapsConfig } from './maps.config';
import { CmMapsLoader as Loader } from './maps.loader';
import { CmMapsLoaderMod as LoaderMod } from './maps.loader.mod';
import { CmMapsTag as Tag } from './maps.tag';

Spec.tag(Tag, {
  schemas: [NO_ERRORS_SCHEMA],
  imports: [LoaderMod],
  providers: []
}, (ref) => {
  let t: Tag;
  beforeEach(() => {
    t = ref.tag;
  });
  ref.fn('ngAfterViewInit', () => {
    it('will load cfg and a map instance m', inject([Loader], (ld) => {
      const cfg = new CmMapsConfig();
      cfg.api = { map() { return { setView() {} }; } };
      cfg.vendor = 'Leaflet';
      cfg.loaded = true;
      ld.cfgMap.Leaflet = cfg;
      t.vendor = 'Leaflet';
      t.ngAfterViewInit();
      expect(t.cfg).toBeTruthy();
    }));
  });
});
