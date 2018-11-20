import { Logout } from './../../../auth/store/actions/auth.actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  state$ = this.store.select((state) => state.auth);
  user$ = this.afAuth.user;

  constructor(private store: Store<State>, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(() => {
        this.store.dispatch(new Logout());
      });
  }

}
