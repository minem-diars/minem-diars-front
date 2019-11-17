import { TestBed } from '@angular/core/testing';

import { ChronogramService } from './chronogram.service';

describe('ChronogramService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChronogramService = TestBed.get(ChronogramService);
    expect(service).toBeTruthy();
  });
});
