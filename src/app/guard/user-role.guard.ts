import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserRoleGuard implements CanActivate{

  constructor(private router: Router) {}

  canActivate() {
    let Role = localStorage.getItem('I_role');
    if(Role == 'USER'){
      return true;
    } else if(Role == 'ADMIN'){
      this.router.navigateByUrl('/admin/dashboard');
      alert("You do not have USER credentials");
      return false;
    } else {
      // Handle other roles or unexpected scenarios
      console.error('Unknown user role');
      // Redirect user to the login page or some other appropriate page
      alert("Please log in first")
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
