import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-zipcode-cache',
  templateUrl: './zipcode-cache.component.html',
  styleUrls: ['./zipcode-cache.component.css']
})
export class ZipcodeCacheComponent implements OnInit {
  zipcodes$ = this.db.collection('zips', ref => ref.where('success', '==', true)).valueChanges();

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }

}
