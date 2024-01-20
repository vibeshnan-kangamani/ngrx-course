import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "./action-types";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>

    this.action$.pipe(
     ofType(AuthActions.login),
     tap(action =>   localStorage.setItem("user", JSON.stringify(action.user)))
   ),
   {dispatch: false}
   // action$.subscribe(action =>{
   //   if(action.type == "[Login Page] User Login"){
   //     localStorage.setItem("user", JSON.stringify(action["user"]))
   //   }
   // })
  //  login$.subscribe();
  )

  logout$ = createEffect(() =>
  this.action$.pipe(
    ofType(AuthActions.logout),
    tap(action => {
      localStorage.removeItem("user");
      this.router.navigateByUrl("/login");
    })
  ))

    constructor(private action$: Actions, private router: Router){


    }
}
