import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryFilterService {
  private apiUrl = 'http://localhost:3000/category'
  constructor(private http: HttpClient) { }

  private categorySubject = new BehaviorSubject<string | null>(null);
  callcategory = this.categorySubject.asObservable();

  setCategory(category: string) {
    this.categorySubject.next(category);  // colocar el nuevo valor de la categoria 
  }

  getMoviesCategory(Category: any): Observable<any>{
    return this.http.get(`${this.apiUrl}/MoviesC`, {
      params: { Category }
    });
  }

  getSeriesCategory(Category: any): Observable<any>{
    return this.http.get(`${this.apiUrl}/SeriesC`, {
      params: { Category }
    });
  };
}
