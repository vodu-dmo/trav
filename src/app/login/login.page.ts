import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

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

}

