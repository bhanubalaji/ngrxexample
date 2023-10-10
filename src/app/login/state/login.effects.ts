
  
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { LoginserviceService } from "../../services/loginservice.service";
import { loginData, loginsubmit } from "./login.actions";
import { Router } from "@angular/router";


@Injectable()
export class LoginEffects {
constructor(private actions$:Actions, private loginservice:LoginserviceService, private router:Router){}

login$ = createEffect(() => {
    console.log('hiiiiii')
  return this.actions$.pipe(ofType(loginData),
exhaustMap((action) => {
        return this.loginservice.logindata(action.submitdata.userName,action.submitdata.password).pipe(
            map((data)=>{
                console.log(data)
                return loginsubmit({'data':data})
            })
        )}))}
         )



loginsubmitRes$ = createEffect(()=>{
    return this.actions$.pipe(ofType(loginsubmit),
   tap((action:any)=>{
    if(action){
        this.router.navigate(['']);

    }
    }))
},
{ dispatch: false }
)




}

