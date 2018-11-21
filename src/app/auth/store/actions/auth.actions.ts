import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginError = '[Auth] Login Error',
  Register = '[Auth] Register',
  RegisterError = '[Auth] Registration Error',
  RegisterSuccess = '[Auth] Registration Success',
  Logout = '[Auth] Logout',
  LogoutSuccess = '[Auth] Logout Success'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public email: string, public password: string) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
}

export class LoginError implements Action {
  readonly type = AuthActionTypes.LoginError;
}

export class Register implements Action {
  readonly type = AuthActionTypes.Register;
  constructor(public payload: any) {}
}

export class RegisterError implements Action {
  readonly type = AuthActionTypes.RegisterError;
}

export class RegisterSuccess implements Action {
  readonly type = AuthActionTypes.RegisterSuccess;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LogoutSuccess;
}

export type AuthActions = Login
                          | LoginSuccess
                          | LoginError
                          | Register
                          | RegisterSuccess
                          | RegisterError
                          | Logout
                          | LogoutSuccess;
