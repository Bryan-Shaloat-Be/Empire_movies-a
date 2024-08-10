import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddfavoritesService {
  private apiUrl = 'http://localhost:3000/favorites';
  private apiUrl2 = 'http://localhost:5135/api/Favorites';
  constructor(private http: HttpClient) { }

  addfavorites(media: any){
    return this.http.post(`${this.apiUrl}/addfavorites`,media);
  }

  deletefavorites(media: any){
    return this.http.post(`${this.apiUrl2}/Delete`,media); // <<-- Api ASP.net
    // return this.http.post(`${this.apiUrl}/deletefavorites`,media); <<-- Api Express
  }
}
