import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private apiUrl = 'http://localhost:3000/movies'
  private apiUrl2 = 'http://localhost:5135/api/Media'
  constructor(private http: HttpClient) { }

  getMoviesService(): Observable<any>{
    return this.http.get(`${this.apiUrl2}/Movies`) // <<-- ASP.Net
    // return this.http.get(`${this.apiUrl}/movies`)  << api Express
  }
  getSeriesService(): Observable<any>{
    return this.http.get(`${this.apiUrl2}/Series`) // << -- api ASP.net
    //return this.http.get(`${this.apiUrl}/series`) <<-- Api Express
  }
}
