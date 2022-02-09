import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { StorageService } from "../service/storage.service";

@Injectable({
    providedIn: 'root'
  })
  export class AuthorizationGuard implements CanActivate {
  
    constructor(private router:Router, private storageService: StorageService){}
  

      canActivate() {
      if(! this.storageService.isAuthenticated()){
         this.router.navigate(['/login']);
      return false;
      }
      return true;
    }

    /*
    canActivate(route: ActivatedRouteSnapshot, state : RouterStateSnapshot ){
      return true;
    }
    */
  }