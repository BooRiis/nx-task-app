import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRoutingModule } from './password-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './password.component';
import { EffectsModule } from '@ngrx/effects';
import { IsOnboarded } from '@task-app/core-lib';


@NgModule({
  declarations: [PasswordComponent],
  imports: [
    CommonModule,
    PasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([IsOnboarded])
  ]
})
export class PasswordModule { }
