import { State } from './../../store/reducers/auth.reducer';
import { Store } from '@ngrx/store';
import { Register } from './../../store/actions/auth.actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registration = {
    email: null,
    password: null
  };
  @ViewChild('register') register: ElementRef;

  constructor(private afAuth: AngularFireAuth, private router: Router,
    private store: Store<State>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(new Register(this.registration));
    /*
    this.afAuth.auth.createUserWithEmailAndPassword(
      this.registration.email, this.registration.password
    )
    .then((user) => {
      console.log(user);
      this.register.nativeElement.reset();
      this.router.navigateByUrl('/');
    })
    .catch((error) => alert(error.message));
    */
    return false;
  }

}
