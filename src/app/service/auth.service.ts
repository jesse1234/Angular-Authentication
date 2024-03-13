import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from './storage-service/local-storage.service';

const BASE_URL = ['http://localhost:8080/'];
export const AUTH_HEADER = 'authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logoutUrl = 'http://localhost:8080/api/logout';

  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: LocalStorageService
  ) { }

  signup(signupRequest:any):Observable<any> {
    return this.http.post(BASE_URL + "register", signupRequest)
  }

  login(username: string, password: string):Observable<any> {
    return this.http.post(BASE_URL + "authentication", 
    {username,password},
    {observe: 'response'})
    .pipe(
      tap(_=> this.log('User Authentication')),
      map((res: HttpResponse<any>) => {
        this.storageService.saveUserId(res.body.userId);
        this.storageService.saveUserRole(res.body.role);
        const tokenLength = res.headers.get(AUTH_HEADER)?.length;
        const bearerToken = res.headers.get(AUTH_HEADER)?.substring(7, tokenLength);
        this.storageService.saveToken(bearerToken); 
        return res;
      })
    );
  }

  log(message: string): void {
    console.log('User Auth Service: Authenticated')
  }

  hello(): Observable<any> {
    return this.http.get(BASE_URL + "api/hello", {
      headers: this.createAuthorizationHeader()
    });
  }

  logout(): Observable<any> {
    // Retrieve JWT token from local storage
    const token = localStorage.getItem('JWT');

    // If token exists, send logout request with token in headers
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Include JWT token in Authorization header
      });
      
      return this.http.get<any>(this.logoutUrl, { headers });
    } else {
      // Handle case where token doesn't exist in local storage
      console.error('JWT token not found in local storage');
      return of(null);
    }
  }
  

  private createAuthorizationHeader(): HttpHeaders {
    const jwtToken = localStorage.getItem("JWT");
    if (jwtToken) {
      return new HttpHeaders().set('Authorization', 'Bearer ' + jwtToken);
    } else {
      console.log("JWT token not found in Local Storage");
      // Return an empty HttpHeaders instance
      return new HttpHeaders();
    }
  }
  
}
