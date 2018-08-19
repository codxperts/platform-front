import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InvitationEffects } from './invitation.effects';

describe('InvitationService', () => {
  let actions$: Observable<any>;
  let effects: InvitationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InvitationEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(InvitationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
