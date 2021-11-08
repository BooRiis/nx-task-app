/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { LocalStorageService, DataJsonService, ApiService } from '@task-app/core-lib';


@Component({
  selector: 'task-app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  userData!: Data;
  public loginForm!: FormGroup;

  constructor(
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilder,
    private dataJsonService: DataJsonService,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      displayName: ['']
    })
    this.dataJsonService.loadJson(this.apiService.url)
  }


  login() {
    this.userData = this.localStorage.getUserData()

    if(this.userData?.user){
      const user = this.userData.user.displayName === this.loginForm.value.displayName
      if(user){
        this.loginForm.reset();
        this.localStorage.set('isOnboarded', true)
        this.router.navigate(['password'])
      }
    }
  }

}
