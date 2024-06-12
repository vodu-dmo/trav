import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    children: [
      {
        path: 'calendar',
        loadChildren: () => import('./tabs/calendar/calendar.module').then(m => m.CalendarPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./tabs/settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'card',
        loadChildren: () => import('./tabs/card/card.module').then(m => m.CardPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('./tabs/events/events.module').then(m => m.EventsPageModule)
      },
      {
        path: '',
        redirectTo: 'calendar',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
