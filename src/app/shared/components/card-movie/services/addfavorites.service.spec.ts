import { TestBed } from '@angular/core/testing';

import { AddfavoritesService } from './addfavorites.service';

describe('AddfavoritesService', () => {
  let service: AddfavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddfavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
