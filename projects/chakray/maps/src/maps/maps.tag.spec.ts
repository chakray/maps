import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Spec } from '@chakray/utils/testing';

import { CmMapsLoaderMod as Loader } from './maps.loader.mod';
import { CmMapsTag as Tag } from './maps.tag';

Spec.tag(Tag, {
  schemas: [NO_ERRORS_SCHEMA],
  imports: [Loader],
  providers: []
}, (ref) => {
  let t: Tag;
  beforeEach(() => {
    t = ref.tag;
  });
});
