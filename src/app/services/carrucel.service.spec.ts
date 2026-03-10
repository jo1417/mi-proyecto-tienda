import { TestBed } from '@angular/core/testing';

import { CarrucelService } from './carrucel.service';

describe('CarrucelService', () => {
  let service: CarrucelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrucelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
