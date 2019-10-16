import { TestBed } from '@angular/core/testing';

import { McService } from './mc.service';

describe('McService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: McService = TestBed.get(McService);
    expect(service).toBeTruthy();
  });
});
