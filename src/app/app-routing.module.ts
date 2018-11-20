import { PasswordResetComponent } from './auth/components/password-reset/password-reset.component';
import { EditProfileComponent } from './auth/components/edit-profile/edit-profile.component';
import { EmailLoginComponent } from './auth/components/email-login/email-login.component';
import { GoogleLoginComponent } from './auth/components/google-login/google-login.component';
import { UserRegistrationComponent } from './auth/components/user-registration/user-registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'users', children: [
    {path: 'register', component: UserRegistrationComponent},
    {path: 'google_login', component: GoogleLoginComponent},
    {path: 'login', component: EmailLoginComponent},
    {path: 'edit', component: EditProfileComponent},
    {path: 'reset_password', component: PasswordResetComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
