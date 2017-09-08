import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { InboxComponent }   from './inbox.component';
import { CommonModule } from '@angular/common';
import { routing } from './inbox.routing';

@NgModule({
  imports: [routing, RouterModule],
  declarations: [InboxComponent]
})
export class InboxModule {}
