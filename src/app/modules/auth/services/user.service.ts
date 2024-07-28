import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, of } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/register';
  private token: string = ''

  constructor(private http: HttpClient) { }

  registerService(userData: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, userData); // aqui realizamos el post al backend
  }

  loginservice(userData: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/sesion`, userData).pipe(   // aqui se realiza el post para el login
      tap((response: any) => {
        this.token = response.token
        sessionStorage.setItem('authtoken', this.token)
      })
    )
  }
}


