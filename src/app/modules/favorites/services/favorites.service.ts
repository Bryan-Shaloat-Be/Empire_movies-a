import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private apiUrl = 'http://localhost:3000/favorites';
  private apiUrl2 = 'http://localhost:5135/api/Favorites';

  constructor(private http: HttpClient) { }

  Favorites(ID_User: any): Observable<any>{
    return this.http.get(`${this.apiUrl2}/Favorites`, { // <<--- Api ASP.net
      params: { ID_User }
    });

    /*return this.http.get(`${this.apiUrl}/favorites`, {  <<--- Api Express
      params: { ID_User }
    });*/
  }
}
