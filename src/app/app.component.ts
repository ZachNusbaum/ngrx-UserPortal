import { LoginSuccess, LogoutSuccess, AlreadySignedIn } from './auth/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { State } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription;
  constructor(
    private afAuth: AngularFireAuth,
    private store: Store<State>) {}
  ngOnInit() {
    this.subscription = this.afAuth.user.subscribe((user) => {
      if (user) {
        this.store.dispatch(new AlreadySignedIn());
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
