import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategorypageComponent } from './categorypage.component';
import { SectionMoviesComponent } from '@shared/components/section-movies/section-movies.component';
import { CardMovieComponent } from '@shared/components/card-movie/card-movie.component';
import * as data from '../../../../data/movies.json'

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
    component.ngOnInit();
    component.mockmovies = (data as any).default.datas;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Verificacion de entrada de datos del json', () =>{
    expect(component.mockmovies.length).toBeGreaterThan(0)
  });

  it('verificacion de la funcion de filtro de categorias',() =>{
    const category: string = 'accion'
    component.filtersmoviescategory(category);
    expect(component.mockmoviesf).toBeGreaterThan(0)
  })
});
