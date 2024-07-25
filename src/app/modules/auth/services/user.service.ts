import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/register';

  constructor(private http: HttpClient) { }

  registerService(userData: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, userData); // aqui realizamos el post al backend
  }
}
