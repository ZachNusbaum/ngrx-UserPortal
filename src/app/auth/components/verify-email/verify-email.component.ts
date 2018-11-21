import { SendEmailVerify } from './../../store/actions/auth.actions';
import { State } from './../../../reducers/index';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  user$ = this.afAuth.user;

  constructor(private afAuth: AngularFireAuth,
    private store: Store<State>) { }

  ngOnInit() {
  }

  sendEmail() {
    this.store.dispatch(new SendEmailVerify());
  }

}
