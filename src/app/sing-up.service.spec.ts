import { TestBed } from '@angular/core/testing';

import { SingUpService } from './sing-up.service';

describe('SingUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingUpService = TestBed.get(SingUpService);
    expect(service).toBeTruthy();
  });
});
