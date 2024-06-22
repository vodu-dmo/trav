import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Importa AngularFireAuth desde '@angular/fire/compat/auth'
import { GoogleAuthProvider } from 'firebase/auth';  // Importa GoogleAuthProvider desde 'firebase/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private afAuth: AngularFireAuth) { }

  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();  // Utiliza GoogleAuthProvider de 'firebase/auth'
      const credential = await this.afAuth.signInWithPopup(provider);
      // Usuario autenticado con éxito, realiza las acciones necesarias
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  }

}
