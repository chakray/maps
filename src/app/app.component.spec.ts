import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { Spec } from '@chakray/utils/testing';

import { AppComponent as Tag } from './app.component';

Spec.tag(Tag, {
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    RouterTestingModule,
  ],
  providers: []
}, (ref) => {
  let t: Tag;
  beforeEach(() => {
    t = ref.tag;
  });
});
