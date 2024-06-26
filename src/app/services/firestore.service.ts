import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  createUser(uid: string, userData: any) {
    return this.firestore.collection('users').doc(uid).set(userData);
  }

  getUser(uid: string) {
    return this.firestore.collection('users').doc(uid).valueChanges();
  }

  updateUser(uid: string, userData: any) {
    return this.firestore.collection('users').doc(uid).update(userData);
  }
}
