import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategorypageComponent } from './categorypage.component';
import { SectionMoviesComponent } from '@shared/components/section-movies/section-movies.component';
import { CardMovieComponent } from '@shared/components/card-movie/card-movie.component';
import * as data from '../../../../data/movies.json'

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CategorypageComponent', () => {
  let component: CategorypageComponent;
  let fixture: ComponentFixture<CategorypageComponent>;
  let HttpTestingController: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CategorypageComponent, SectionMoviesComponent, CardMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Verificacion de entrada de datos del json', () =>{
    expect(component.MoviesC.length).toBeGreaterThan(0)
  });

  it('verificacion de la funcion de filtro de categorias',() =>{
    const category: string = 'accion'
    
    component.GetMoviesCategory(category); // buscar verficar la filtracion de datos 
    expect(component.MoviesC.length).toBeGreaterThan(3) // Verificacion de filtros correcta
  })
});
