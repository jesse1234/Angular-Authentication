import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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
    })
  }

  login() {
    console.log(this.loginForm?.value);
    this.service.login(this.loginForm?.value).subscribe((response)=>{
      console.log(response);
      if(response.jwt != null) {
        alert(response.jwt);
        const jwtToken = response.jwt;
        localStorage.setItem('JWT', jwtToken);
        this.router.navigateByUrl('/dashboard');
      }
    })
  }
}