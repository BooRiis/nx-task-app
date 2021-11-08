/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@task-app/core-lib';

@Component({
  selector: 'task-app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  onboarded:boolean;

  constructor(private router: Router, private authService: AuthService) { 
    this.onboarded = authService.getAuth()
  }

  ngOnInit(): void {
  }

  public goStart = ():void => {
    this.router.navigate(['username'])
  }

  goToProfile = (): void => {
    this.router.navigate(['profile'])
  }
}
