import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private apiUrl = 'http://localhost:3000/movies'
  constructor(private http: HttpClient) { }

  getMoviesService(): Observable<any>{
    return this.http.get(`${this.apiUrl}/movies`)
  }
  getSeriesService(): Observable<any>{
    return this.http.get(`${this.apiUrl}/series`)
  }
}
