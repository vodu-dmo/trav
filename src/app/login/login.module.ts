import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule si es necesario
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page'; // Asegúrate de importar correctamente LoginPage

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Importa FormsModule si es necesario para el módulo de LoginPage
    IonicModule, // Configura IonicModule para el módulo de LoginPage
    LoginPageRoutingModule
  ],
  declarations: [
    LoginPage
  ]
})
export class LoginModule {}
