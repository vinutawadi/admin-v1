import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';



const appRoutes: Routes = [
    
    { path: '', component: AdminLayoutComponent },
      

]
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);