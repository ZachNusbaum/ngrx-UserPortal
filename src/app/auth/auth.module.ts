import { AppRoutingModule } from './../app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { GoogleLoginComponent } from './components/google-login/google-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { EmailLoginComponent } from './components/email-login/email-login.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';

@NgModule({
  declarations: [GoogleLoginComponent, UserRegistrationComponent, EmailLoginComponent, EditProfileComponent, PasswordResetComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    GoogleLoginComponent
  ]
})
export class AuthModule { }
