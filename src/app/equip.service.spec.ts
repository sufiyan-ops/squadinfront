import { TestBed } from '@angular/core/testing';

import { EquipService } from './equip.service';

describe('EquipService', () => {
  let service: EquipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
