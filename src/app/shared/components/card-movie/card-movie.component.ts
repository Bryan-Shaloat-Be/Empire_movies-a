import { Component, Input, Renderer2 } from '@angular/core';
import { movieslist } from '@cores/models/movies.model';
import { AddfavoritesService } from './services/addfavorites.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrl: './card-movie.component.css'
})
export class CardMovieComponent {
  @Input() movie: any = <any>{};



  menu: boolean = false;

  constructor(private renderer: Renderer2, private addfav: AddfavoritesService){}

  onclickmenu() {
    this.menu = !this.menu;
    if (this.menu) {
      this.renderer.addClass(document.body, 'no-scroll');  // Funcion para desplegar la tarjeta de la pelicula y desabilitar un scroll 
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }
  addTofavorites(){
    const token = sessionStorage.getItem('authtoken')
    if(token){
      const decodedToken = jwtDecode(token) as { id: number; };
      
      this.addfav.addfavorites(decodedToken.id).subscribe(response =>{
        console.log('Peliculas y series favoritas obtenidas', response);
      })
    }else{
      console.log('Token vacio');
    }
  }

}
