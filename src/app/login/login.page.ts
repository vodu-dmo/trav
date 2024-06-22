import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth) { }

  async loginWithGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);
      // Usuario autenticado con éxito, realiza las acciones necesarias
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  }

  async login() {
    try {
      const credential = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      // Usuario autenticado con éxito, realiza las acciones necesarias
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }

}


