import { Spec } from '@chakray/utils/testing';

import { CmMapsConfig as P } from './maps.config';

Spec.pdr(P, {}, (ref) => {
  let p: P;
  beforeEach(() => {
    p = ref.pdr;
  });
  ref.fn('lazy', () => {
    it('return cfg lazily if loaded', () => {
      p.loaded = true;
      p.lazy().subscribe(d => {
        expect(d).toEqual(p);
      });
    });
    it('return cfg lazily for cfg$', () => {
      p.lazy().subscribe(d => {
        expect(d).toEqual(p);
      });
      p.cfg$.next(true);
    });
  });
  ref.fn('load', () => {
    it('return cfg lazily if loaded', () => {
      p.load().subscribe((d: any) => {
        d.subscribe(e => {
          expect(d).toEqual(p);
        });
      });
    });
  });
});
