import { LoginSuccess } from './../../store/actions/auth.actions';
import { State } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {
  user$ = this.afAuth.idTokenResult;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private store: Store<State>) { }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((user) => {
      console.log(user);
      this.store.dispatch(new LoginSuccess());
      this.ngZone.run(() => this.router.navigate(['/']));
    })
    .catch((error) => alert(error.message));
  }
}
