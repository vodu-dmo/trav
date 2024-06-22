import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    // Reemplaza 'HomePageModule' con el nombre correcto de tu módulo home si es diferente
  },
  {
    path: 'perfil',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
    // Reemplaza 'ProfilePageModule' con el nombre correcto de tu módulo perfil si es diferente
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    // Reemplaza 'LoginModule' con el nombre correcto de tu módulo login si es diferente
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: 'home' } // Ruta para manejar rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
