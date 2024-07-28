import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyMoviesComponent } from './only-movies.component';

describe('OnlyMoviesComponent', () => {
  let component: OnlyMoviesComponent;
  let fixture: ComponentFixture<OnlyMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlyMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
