import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsernameRoutingModule } from './username-routing.module';
import { UsernameComponent } from './username.component';


@NgModule({
  declarations: [UsernameComponent],
  imports: [
    CommonModule,
    UsernameRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsernameModule { }
