/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, OnboardingGuard, ProfileGuard } from '@task-app/core-lib/guards';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
