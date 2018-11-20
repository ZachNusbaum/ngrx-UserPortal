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

    case AuthActionTypes.LoadAuths:
      return state;


    default:
      return state;
  }
}