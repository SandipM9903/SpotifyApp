import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService : AuthService, private router : Router){}
  
  canActivate()
  {
    if(this.authService.isUserLoggedIn)
    {
      return true;
    }
    else
    {
      window.alert("Permission Denied");
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
