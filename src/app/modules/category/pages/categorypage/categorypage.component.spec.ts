import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorypageComponent } from './categorypage.component';
import { SectionMoviesComponent } from '@shared/components/section-movies/section-movies.component';
import { CardMovieComponent } from '@shared/components/card-movie/card-movie.component';

describe('CategorypageComponent', () => {
  let component: CategorypageComponent;
  let fixture: ComponentFixture<CategorypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategorypageComponent, SectionMoviesComponent, CardMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
