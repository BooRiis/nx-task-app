/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService, Data, isOnboarded, ProfileFacadeService} from '@task-app/core-lib';
@Component({
  selector: 'task-app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  passwordLogin!: FormGroup
  userData!: Data

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private localStorage: LocalStorageService,
    private facade: ProfileFacadeService
    ) { }

  ngOnInit(): void {
    this.passwordLogin = this.formBuilder.group({
      password: [''],
      confirmPassword: ['']
    })
    this.userData = this.localStorage.getUserData();
  }

  loginPassword() {
    if(this.userData?.user) {
      const userPassword = this.userData.user.password === this.passwordLogin.value.password;
      const confirmPassword = this.userData.user.password === this.passwordLogin.value.confirmPassword
      if(userPassword === confirmPassword) {
        this.passwordLogin.reset();
        this.localStorage.set('access_token', 'jedete');
        this.localStorage.remove('isOnboarded')
        this.facade.dispatch(isOnboarded({onboarded: true}))
        this.router.navigate(['profile'])
      }
    }
  }

}
