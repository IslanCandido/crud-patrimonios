import { TestBed } from '@angular/core/testing';

import { PatrimonioServiceService } from './patrimonio-service.service';

describe('PatrimonioServiceService', () => {
  let service: PatrimonioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatrimonioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
