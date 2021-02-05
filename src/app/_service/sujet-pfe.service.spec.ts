import { TestBed } from '@angular/core/testing';

import { SujetPfeService } from './sujet-pfe.service';

describe('SujetPfeService', () => {
  let service: SujetPfeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SujetPfeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
