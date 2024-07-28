import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private apiUrl = 'http://localhost:3000/favorites';

  constructor(private http: HttpClient) { }

  Favorites(ID_User: any): Observable<any>{
    return this.http.get(`${this.apiUrl}/favorites`, {
      params: { ID_User }
    });
  }
}
