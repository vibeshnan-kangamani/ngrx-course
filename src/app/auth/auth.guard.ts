import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AppState } from "../reducers";
import { Store, select } from "@ngrx/store";
import { isLoggedIn } from "./auth.selector";
import { tap } from "rxjs/operators";


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>,private router: Router){}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.store.pipe(
      select(isLoggedIn),
      tap(loggedin => {
        if(!loggedin){
          this.router.navigateByUrl('/login')
        }
      })
    )
  }
}
