import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddfavoritesService {
  private apiUrl = 'http://localhost:3000/addfavorites';
  constructor(private http: HttpClient) { }

  addfavorites(MediaFavorite: any){
    return this.http.post(`${this.apiUrl}/addfavorites`,MediaFavorite);
  }
}
