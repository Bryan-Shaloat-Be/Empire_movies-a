import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMovieComponent } from './card-movie.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CardMovieComponent', () => {
  let component: CardMovieComponent;
  let fixture: ComponentFixture<CardMovieComponent>;
  let HttpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CardMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verificacion verdadera del cambio boolean para el despliegue de la tarjeta de pelicula',()=>{
    const menu: boolean = true
    component.onclickmenu()
    expect(component.menu).toEqual(menu)
  });
});
