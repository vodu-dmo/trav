import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';  
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService,private firestoreService: FirestoreService, private router: Router) {}

  async login() {
    try {
      const userCredential = await this.authService.login(this.email, this.password);
      const uid = userCredential.user.uid;
      const userData = await this.firestoreService.getUser(uid).toPromise();
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  }
  async register() {
    try {
      const userCredential = await this.authService.register(this.email, this.password);
      const uid = userCredential.user.uid;
      const userData = { email: this.email, displayName: 'User Name', photoURL: '...' };
      await this.firestoreService.createUser(uid, userData);
    } catch (error) {
      console.error(error);
    }
  }

  async loginWithGoogle() {
    try {
      await this.authService.googleSignIn();
      this.router.navigate(['/perfil']);
    } catch (error) {
      console.error('Error during Google login:', error);
      // Manejar el error apropiadamente, por ejemplo, mostrando un mensaje al usuario
    }
  }

  async logout() {
    try {
      await this.authService.signOut();
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Error during logout:', error);
      // Manejar el error apropiadamente, por ejemplo, mostrando un mensaje al usuario
    }
  }
}
