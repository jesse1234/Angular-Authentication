import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../service/storage-service/local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{

  constructor(private router: Router) {}

  canActivate(): boolean {
    // const role = localStorage.getItem('I_role');
    if(LocalStorageService.hasToken()) {
      return true;
    } else {
      alert("Please log in first")
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
