import { Component, Input, Renderer2 } from '@angular/core';
import { movieslist } from '@cores/models/movies.model';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrl: './card-movie.component.css'
})
export class CardMovieComponent {
  @Input() movie: movieslist = <any> [];
  @Input() id!: movieslist;
  @Input() title!: movieslist;
  @Input() description!: movieslist;
  @Input() genre!: movieslist;
  @Input() time!: movieslist;
  @Input() img!: movieslist;

  menu: boolean = false;

  constructor(private renderer: Renderer2){}

  onclickmenu() {
    this.menu = !this.menu;
    if (this.menu) {
      this.renderer.addClass(document.body, 'no-scroll');  // Funcion para desplegar la tarjeta de la pelicula y desabilitar un scroll 
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }
}
