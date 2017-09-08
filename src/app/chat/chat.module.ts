import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { ChatComponent }   from './chat.component';
import { CommonModule } from '@angular/common';
import { routing } from './chat.routing';

@NgModule({
  imports: [routing, RouterModule],
  declarations: [ChatComponent]
})
export class ChatModule {}