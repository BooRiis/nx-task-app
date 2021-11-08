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
@NgModule({
  declarations: [AppComponent],
  imports: [
  BrowserModule,
  CommonModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  CoreLibModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}