import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async login(email: string, password: string) {
    const credential = await this.afAuth.signInWithEmailAndPassword(email, password);
    await this.updateUserData(credential.user);
    return credential;
  }

  async register(email: string, password: string) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    await this.updateUserData(credential.user);
    return credential;
  }

  async emailPasswordLogin(email: string, password: string) {
    const credential = await this.afAuth.signInWithEmailAndPassword(email, password);
    await this.updateUserData(credential.user);
    return credential;
  }

  async googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    await this.updateUserData(credential.user);
    return credential;
  }

  async facebookSignIn() {
    const provider = new firebase.auth.FacebookAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    await this.updateUserData(credential.user);
    return credential;
  }

  private updateUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }
}
