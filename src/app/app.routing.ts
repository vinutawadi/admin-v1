import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';


export const appRoutes: Routes = [

  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'inbox',
        loadChildren: './inbox/inbox.module#InboxModule'
      },

      {
        path: 'chat',
        loadChildren: './chat/chat.module#ChatModule'
      },
      {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
        
      },

    ]

  },

]
export const approuting: ModuleWithProviders = RouterModule.forRoot(appRoutes);