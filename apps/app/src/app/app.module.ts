/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CoreLibModule} from '@task-app/core-lib'
import { AuthService } from 'libs/core-lib/src/lib/services/auth.service';
import { LocalStorageService } from 'libs/core-lib/src/lib/services/local-storage.service';
import { AuthGuard } from 'libs/core-lib/src/lib/guards/auth.guard';
import { DataJsonService } from 'libs/core-lib/src/lib/services/data-json.service';
import { ProfileGuard} from 'libs/core-lib/src/lib/guards/profile.guard';
import { OnboardingGuard} from 'libs/core-lib/src/lib/guards/onboarding.guard';
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
  providers: [
    AuthService,
    LocalStorageService,
    AuthGuard,
    DataJsonService,
    ProfileGuard,
    OnboardingGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}