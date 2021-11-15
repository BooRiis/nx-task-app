import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsernameRoutingModule } from './username-routing.module';
import { UsernameComponent } from './username.component';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from '@task-app/core-lib';


@NgModule({
  declarations: [UsernameComponent],
  imports: [
    CommonModule,
    UsernameRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([TaskEffects])
  ]
})
export class UsernameModule { }
