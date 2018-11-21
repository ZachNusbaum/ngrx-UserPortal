import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-zipcode-cache',
  templateUrl: './zipcode-cache.component.html',
  styleUrls: ['./zipcode-cache.component.css']
})
export class ZipcodeCacheComponent implements OnInit {
  zipcodes$ = this.db.collection('zips', (ref) => {
    return ref
      .where('success', '==', true)
      .where('input', '>', '00000')
      .orderBy('input', 'asc');
  }).valueChanges();

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }

}
