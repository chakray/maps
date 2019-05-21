import { Spec } from '@chakray/utils/testing';

import { CmMapsConfig } from './maps.config';
import { CmMapsLoader as P } from './maps.loader';

class SingleConfig extends CmMapsConfig {
  vendor: any = 'Unknown';
  loaded = true;
  constructor() {
    super();
  }
}

Spec.pdr(P, {
  providers: [{
    provide: CmMapsConfig, useClass: SingleConfig
  }]
}, (ref) => {
  let p: P;
  beforeEach(() => {
    p = ref.pdr;
  });
  ref.fn('loadConfig', () => {
    it('when vnd is "Unknown", will load cfg lazily', () => {
      p.loadConfig('Unknown');
      expect(p).toBeTruthy();
    });
  });
});

class GmapsConfig extends CmMapsConfig {
  vendor: any = 'Gmaps';
  loaded = true;
  api = {
    maps: { Map() {} }
  };
}

Spec.pdr(P, {
  providers: [{
    provide: CmMapsConfig, useClass: GmapsConfig, multi: true
  }, {
    provide: CmMapsConfig, useClass: SingleConfig, multi: true
  }]
}, (ref) => {
  let p: P;
  beforeEach(() => {
    p = ref.pdr;
  });
  ref.fn('loadConfig', () => {
    it('when vnd is "Unknown", will load cfg lazily', () => {
      p.loadConfig('Unknown').subscribe(cfg => {
        expect(cfg.vendor).toEqual('Unknown');
      });
      expect(p).toBeTruthy();
    });
  });
  ref.fn('init', () => {
    it('when vnd is "Unknown", will initUnknown', () => {
      p.loadConfig('Unknown').subscribe(cfg => {
        const r = p.init(cfg, {});
        expect(r).toBeUndefined();
      });
    });
    it('when vnd is "Gmaps", will initGmaps', () => {
      p.loadConfig('Gmaps').subscribe(cfg => {
        const r = p.init(cfg, {});
        expect(r).toBeTruthy();
      });
    });
  });
});
