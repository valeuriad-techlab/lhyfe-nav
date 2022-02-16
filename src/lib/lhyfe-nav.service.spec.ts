import { TestBed } from '@angular/core/testing';

import { LhyfeNavService } from './lhyfe-nav.service';

describe('LhyfeNavService', () => {
  let service: LhyfeNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LhyfeNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
