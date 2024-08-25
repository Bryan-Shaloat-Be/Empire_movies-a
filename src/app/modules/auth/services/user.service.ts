import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, of } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/register'; // Express api
  private apiUrl2 = 'http://localhost:5135/api/RegisterUser'; //ASP.net core api/ Register User
  private apiUrl3 = 'http://back.empire.com/api/RegisterUser' // prueba para kubernetes
  private token: string = ''

  constructor(private http: HttpClient) { }

  registerService(userData: any): Observable<any>{
    return this.http.post(`${this.apiUrl2}`, userData); // << --- ASP.net
    //return this.http.post(`${this.apiUrl}/register`, userData);  << --- Express
  }

  loginservice(userData: any): Observable<any>{ // aqui se realiza el post para el login ASP.net
    return this.http.get(`${this.apiUrl2}`, {
      params : userData
    }).pipe(   
      tap((response: any) => {
        this.token = response.token
        sessionStorage.setItem('authtoken', this.token)
      })
    /*return this.http.post(`${this.apiUrl}/sesion`, userData).pipe(   // aqui se realiza el post para el login express
      tap((response: any) => {
        this.token = response.token
        sessionStorage.setItem('authtoken', this.token)
      }) */
    )
  }
}


