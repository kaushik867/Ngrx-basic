import { TestBed } from '@angular/core/testing';

import { GetApiCallService } from './get-api-call.service';

describe('GetApiCallService', () => {
  let service: GetApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
