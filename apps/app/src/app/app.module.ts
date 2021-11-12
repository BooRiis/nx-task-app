/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  CoreLibModule
} from '@task-app/core-lib'
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './state/task.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [AppComponent],
  imports: [
  BrowserModule,
  CommonModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  CoreLibModule,
  StoreModule.forRoot({task: taskReducer}),
  StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: environment.production,
  })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}