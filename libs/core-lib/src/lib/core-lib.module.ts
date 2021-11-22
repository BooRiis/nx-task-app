import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { DataJsonService } from './services/data-json.service';
import { LocalStorageService } from './services/local-storage.service';
import { AuthGuard, ProfileGuard, OnboardingGuard} from './guards'
import { ProfileFacadeService } from '../lib/facades';
@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AuthService,
    LocalStorageService,
    AuthGuard,
    ApiService,
    DataJsonService,
    ProfileGuard,
    OnboardingGuard,
    ProfileFacadeService
  ],
})
export class CoreLibModule {}
