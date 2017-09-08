import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { CalendarComponent }   from './calendar.component';
import { CommonModule } from '@angular/common';
import { routing } from './calendar.routing';

@NgModule({
  imports: [routing, RouterModule],
  declarations: [CalendarComponent]
})
export class CalendarModule {}