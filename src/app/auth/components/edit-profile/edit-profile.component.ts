import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user$ = this.afAuth.user;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  onSubmit(displayName) {
    this.afAuth.auth.currentUser.updateProfile(
      {displayName: displayName, photoURL: this.afAuth.auth.currentUser.photoURL }
      ).then((pro) => console.log(pro));
    return false;
  }

}
