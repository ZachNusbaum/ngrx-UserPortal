import { Login } from './../../store/actions/auth.actions';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as fromAuth from '../../store/reducers/auth.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css']
})
export class EmailLoginComponent implements OnInit {
  @ViewChild('emailLogin') emailLogin: ElementRef;
  signIn = { email: null, password: null };

  constructor(private afAuth: AngularFireAuth, private store: Store<fromAuth.State>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(new Login(this.signIn.email, this.signIn.password));
    /* this.afAuth.auth.signInWithEmailAndPassword(
      this.signIn.email, this.signIn.password
    )
    .then((user) => {
      console.log(user);
      this.emailLogin.nativeElement.reset();
      this.router.navigateByUrl('/');
    })
    .catch((error) => alert(error.message)); */
    return false;
  }

}
