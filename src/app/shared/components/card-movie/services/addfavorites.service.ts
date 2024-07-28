import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddfavoritesService {
  private apiUrl = 'http://localhost:3000/favorites';
  constructor(private http: HttpClient) { }

  addfavorites(media: any){
    return this.http.post(`${this.apiUrl}/addfavorites`,media);
  }

  deletefavorites(media: any){
    return this.http.post(`${this.apiUrl}/deletefavorites`,media);
  }
}
