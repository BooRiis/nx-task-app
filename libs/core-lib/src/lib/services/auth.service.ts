/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorage: LocalStorageService) { }


  getAuth = (): boolean => {
    const access_token = this.localStorage.get('access_token');
    return !!access_token;
  }
}
