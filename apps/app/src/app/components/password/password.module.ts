import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRoutingModule } from './password-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './password.component';


@NgModule({
  declarations: [PasswordComponent],
  imports: [
    CommonModule,
    PasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PasswordModule { }
