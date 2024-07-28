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
      const media = {ID_User: decodedToken.id, ID_Movie: this.movie.ID_Movie !== undefined? this.movie.ID_Movie: null, ID_Series: this.movie.ID_Series !== undefined? this.movie.ID_Series: null}
      console.log(media)
      this.addfav.addfavorites(media).subscribe(response =>{
        console.log('Peliculas o series anadida a favoritos', response);
      })
    }else{
      console.log('Token vacio');
    }
  }

  deletefavorites(){
    const token = sessionStorage.getItem('authtoken');
    if(token){
      const decodedToken = jwtDecode(token) as { id: number; };
      const media = {ID_User: decodedToken.id, ID_Movie: this.movie.ID_Movie !== undefined? this.movie.ID_Movie: null, ID_Series: this.movie.ID_Series !== undefined? this.movie.ID_Series: null}
      console.log(media)
      this.addfav.deletefavorites(media).subscribe(response =>{
        console.log('Peliculas o series eliminadas de favoritos', response);
      })
    }else{
      console.log('Token vacio');
    }
   
  }

}
