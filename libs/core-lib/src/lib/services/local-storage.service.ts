/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import {Data} from '../interface/user-info'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage: Storage;

  constructor() { 
    this.localStorage = window.localStorage
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(key: string): any | null {
    if(this.isLocalStorageSupported) {
      const value = this.localStorage.getItem(key);
      if(value) {
        return JSON.parse(value);
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  set(key: string, value: any): boolean {
    if(this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));

      return true;
    }

    return false;
  }

  remove(key: string): boolean {
    if(this.isLocalStorageSupported) {
      this.localStorage.removeItem(key)

      return true 
    }

    return false
  }

  get isLocalStorageSupported(): boolean {
    return !!this.localStorage
  }

  getUserData(): Data {
    return this.get('userData') as Data;
  }
}
