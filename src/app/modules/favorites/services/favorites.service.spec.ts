import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FavoritesService', () => {
  let service: FavoritesService;
  let HttpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
