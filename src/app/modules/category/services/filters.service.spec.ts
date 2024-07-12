import { TestBed } from '@angular/core/testing';

import { FiltersService } from './filters.service';
import { combineLatest } from 'rxjs';
import { Component } from '@angular/core';

describe('FiltersService', () => {
  let service: FiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('verificacion verdadera del servicio',()=>{
    const category: string = ''
    service.setCategory(category);
  });
});
