import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule si es necesario
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    // Asegúrate de no declarar LoginPage aquí
  ],
  imports: [
    BrowserModule,
    FormsModule, // Importa FormsModule si es necesario para la aplicación
    IonicModule.forRoot(), // Configura IonicModule para la aplicación principal
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
