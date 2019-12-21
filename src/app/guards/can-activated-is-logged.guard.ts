import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivatedIsLoggedGuard implements CanActivate {

  constructor(private tokenStorage: TokenStorageService,
              private router: Router,
              private commonService: CommonService) {}

  canActivate() {
    if (!this.tokenStorage.getToken()) {
      console.log('Debe loguearse');
      this.router.navigate(['/']);
      return false;
    } else {
      this.commonService.validateToken().subscribe(
        data => {
          return true;
        },
        error => {
          console.log('Token ilegal o sesión expirada.');
          this.router.navigate(['/']);
          return false;
        }
      );
    }
    return true;
  }

}
