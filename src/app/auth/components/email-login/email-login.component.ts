import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css']
})
export class EmailLoginComponent implements OnInit {
  @ViewChild('emailLogin') emailLogin: ElementRef;
  signIn = { email: null, password: null };

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.afAuth.auth.signInWithEmailAndPassword(
      this.signIn.email, this.signIn.password
    )
    .then((user) => {
      console.log(user);
      this.emailLogin.nativeElement.reset();
      this.router.navigateByUrl('/');
    })
    .catch((error) => alert(error.message));
    return false;
  }

}
