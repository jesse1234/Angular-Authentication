import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const BASE_URL = ['http://localhost:8080/']

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signup(signupRequest:any):Observable<any> {
    return this.http.post(BASE_URL + "register", signupRequest)
  }

  login(authenticaitonRequest:any):Observable<any> {
    return this.http.post(BASE_URL + "authentication", authenticaitonRequest)
  }

  hello(): Observable<any> {
    return this.http.get(BASE_URL + "api/hello", {
      headers: this.createAuthorizationHeader()
    });
  }

  logout(): void {
    // Remove JWT token from local storage
    localStorage.removeItem('JWT');

    // Send request to backend /logout endpoint
    this.http.post<any>('http://localhost:8080/logout', {}).subscribe(
      () => {
        // Optionally, perform any additional frontend cleanup tasks
        console.log('Logout successful');
        // Navigate to the login page or any other appropriate page
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Logout error:', error);
        // Handle logout error if needed
        // Navigate to the login page or any other appropriate page
        this.router.navigate(['/login']);
      }
    );
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
