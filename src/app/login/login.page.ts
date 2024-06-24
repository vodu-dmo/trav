import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      await this.authService.emailPasswordLogin(this.email, this.password);
      this.router.navigate(['/perfil']);
    } catch (error) {
      console.error('Error during login:', error);
      // Manejar el error apropiadamente, por ejemplo, mostrando un mensaje al usuario
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
