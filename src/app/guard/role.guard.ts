import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate{

  constructor(private router: Router) {}

  canActivate() {
    let Role = localStorage.getItem('I_role');
    if(Role == 'ADMIN'){
      return true;
    } else if(Role == 'USER'){
      this.router.navigateByUrl('/user/dashboard');
      alert("You do not have ADMIN credentials");
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