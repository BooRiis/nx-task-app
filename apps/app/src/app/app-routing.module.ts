/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'libs/core-lib/src/lib/guards/auth.guard';
import { OnboardingGuard } from 'libs/core-lib/src/lib/guards/onboarding.guard';
import { ProfileGuard } from 'libs/core-lib/src/lib/guards/profile.guard';

const routes: Routes = [
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  {
    path: 'introduction', 
    loadChildren: () => import('./components/introduction/introduction.module').then(m => m.IntroductionModule)
  },
  {
    path: 'username', 
    loadChildren: () => import('./components/username/username.module').then(m => m.UsernameModule),
    canActivate: [ProfileGuard]
  },
  {
    path: 'password', 
    loadChildren: () => import('./components/password/password.module').then(m => m.PasswordModule),
    canActivate: [OnboardingGuard, ProfileGuard]
  },
  {
    path: 'profile', 
    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
