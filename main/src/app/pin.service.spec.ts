import { TestBed } from '@angular/core/testing';

import { PinService } from './pin.service';

describe('PinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PinService = TestBed.get(PinService);
    expect(service).toBeTruthy();
  });
});
