import { Router } from '@angular/router';
import { Login, LoginSuccess, LogoutSuccess, RegisterSuccess, RegisterError, LoginError } from './../actions/auth.actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes } from '../actions/auth.actions';
import { mergeMap, map, tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    mergeMap((action: Login) => {
      const signIn = this.afAuth.auth.signInWithEmailAndPassword(
        action.email, action.password
      ).catch((error) => alert(error.message));
      return signIn;
    }),
    map((user) => {
      // console.log('user', user);
      if (user) {
        return new LoginSuccess();
      } else {
        return new LoginError();
      }
    })
  );

  @Effect({dispatch: false})
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigateByUrl('/'))
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(AuthActionTypes.Logout),
    map(() => {
      return new LogoutSuccess();
    })
  );

  @Effect()
  register$ = this.actions$.pipe(
    ofType(AuthActionTypes.Register),
    mergeMap((action: any) => {
      return this.afAuth.auth.createUserWithEmailAndPassword(
        action.payload.email, action.payload.password
      );
    }),
    map(() => new RegisterSuccess()),
    catchError(() => of(new RegisterError))
  );

  @Effect({dispatch: false})
  registerSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.RegisterSuccess),
    tap(() => this.router.navigateByUrl('/'))
  );

  @Effect({dispatch: false})
  sendVerify$ = this.actions$.pipe(
    ofType(AuthActionTypes.SendEmailVerify),
    tap(() => this.afAuth.auth.currentUser.sendEmailVerification()),
    tap(() => this.router.navigateByUrl('/'))
  );


  constructor(private actions$: Actions, private afAuth: AngularFireAuth, private router: Router) {}
}
