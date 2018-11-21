import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

export interface State {
  loggedIn: boolean;
}

export const initialState: State = {
  loggedIn: false
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionTypes.AlreadySignedIn:
      return {...state, loggedIn: true};

    case AuthActionTypes.LoginSuccess:
      return {...state, loggedIn: true};

    case AuthActionTypes.LogoutSuccess:
      return {...state, loggedIn: false};

    case AuthActionTypes.RegisterSuccess:
      return {...state, loggedIn: true};

    default:
      return state;
  }
}
