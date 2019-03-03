import { TestBed } from '@angular/core/testing';

import { SideBarServiceService } from './side-bar-service.service';

describe('SideBarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SideBarServiceService = TestBed.get(SideBarServiceService);
    expect(service).toBeTruthy();
  });
});
