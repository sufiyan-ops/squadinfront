import { TestBed } from '@angular/core/testing';

import { CreatefeedService } from './createfeed.service';

describe('CreatefeedService', () => {
  let service: CreatefeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatefeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
