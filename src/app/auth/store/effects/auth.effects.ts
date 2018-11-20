import { Router } from '@angular/router';
import { Login, LoginSuccess } from './../actions/auth.actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes } from '../actions/auth.actions';
import { mergeMap, map, tap } from 'rxjs/operators';
@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    mergeMap((action: Login) => {
      return this.afAuth.auth.signInWithEmailAndPassword(
        action.email, action.password
      );
    }),
    map((user) => {
      return new LoginSuccess();
    }),
    tap(() => this.router.navigateByUrl('/'))
  );

  constructor(private actions$: Actions, private afAuth: AngularFireAuth, private router: Router) {}
}
