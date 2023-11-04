import { TestBed } from '@angular/core/testing';

import { HistoriacService } from './historiac.service';

describe('HistoriacService', () => {
  let service: HistoriacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
