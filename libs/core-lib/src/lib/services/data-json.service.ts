/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import {Data} from '../interface/user-info'

@Injectable({
  providedIn: 'root'
})
export class DataJsonService {

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {

  }

  loadJson = (url: string): void => {
    this.http.get<Data>(url)
    .subscribe(data => {
      this.localStorage.set('userData', data)
    })
  }
}
