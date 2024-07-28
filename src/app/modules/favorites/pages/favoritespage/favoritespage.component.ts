import { Component } from '@angular/core';
import { UserService } from '@modules/auth/services/user.service';
import { FavoritesService } from '@modules/favorites/services/favorites.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-favoritespage',
  templateUrl: './favoritespage.component.html',
  styleUrl: './favoritespage.component.css'
})
export class FavoritespageComponent {
  favoritas: any[] = []

  constructor(private user: UserService, private favorites: FavoritesService){

  }

  ngOnInit(): void{
    this.getfavorites()
  }

  getfavorites(){
  const token = sessionStorage.getItem('authtoken')  // almacenamos el token para obtener el usuario que ingreso 
    if(token){
      const decodedToken = jwtDecode(token) as { id: number; };
      this.favorites.Favorites(decodedToken.id).subscribe(response =>{
        console.log('Peliculas y series favoritas obtenidas', response);
        this.favoritas = response.data
      })
    }else{
      console.log('Token vacio');
    }
  }
}
