import { TestBed } from '@angular/core/testing';

import { WatchplayerService } from './watchplayer.service';

describe('WatchplayerService', () => {
  let service: WatchplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
