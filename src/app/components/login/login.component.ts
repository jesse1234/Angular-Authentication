import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../service/storage-service/local-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm!: FormGroup; 
  
  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  login() {
    const token = localStorage.getItem('JWT');
    const userId = localStorage.getItem('I_user');
    if (token || userId) {
      alert('You are already logged in');
      return; // Stop further execution
    }

    console.log(this.loginForm?.value);
    this.service.login(this.loginForm?.get(['username'])!.value, this.loginForm?.get(['password'])!.value).subscribe(
      (response) => {
        console.log(response);
        if (response != null) {
          // Save token and user details to local storage
          LocalStorageService.savedToken(response.headers.get('authorization'));
          LocalStorageService.savedUserId(response.body.userId);
          LocalStorageService.savedUserRole(response.body.role);
  
          // Redirect based on user role
          if (localStorage.getItem('I_role') === "USER") {
            this.router.navigateByUrl('/user/dashboard');
          } else if (localStorage.getItem('I_role') === "ADMIN") {
            this.router.navigateByUrl('/admin/dashboard');
          } else {
            // Handle other roles or unexpected scenarios
            console.error('Unknown user role');
          }
        }
      },
      (error) => {
        console.error('Login error:', error);
        if (error.status === 403 || error.status === 401) {
          alert('Invalid username or password. Please try again.');
        } else {
          alert('An error occurred while logging in. Please try again later.');
        }
      }
    );
  }
}
