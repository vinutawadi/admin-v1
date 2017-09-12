import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from   './alert.routing'
import { AlertComponent } from './alert.component';


@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      routing,
      NgbModule
    ],
    declarations: [
        AlertComponent,
        
        ]
           
})
export class AlertModule {}