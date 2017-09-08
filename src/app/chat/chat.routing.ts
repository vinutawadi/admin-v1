import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';

 const routes: Routes = [{
  path: '',
  component: ChatComponent,

}];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);