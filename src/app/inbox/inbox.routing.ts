import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox.component';

 const routes: Routes = [{
  path: '',
  component: InboxComponent,

}];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
