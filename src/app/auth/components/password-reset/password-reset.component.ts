import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  email: string;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  onSubmit() {
    this.afAuth.auth.sendPasswordResetEmail(this.email)
      .then((success) => {
        alert('Please check your inbox.');
      })
      .catch((error) => {
        alert(error.message);
      });
  }

}
