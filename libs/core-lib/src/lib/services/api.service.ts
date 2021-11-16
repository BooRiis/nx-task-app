/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Data} from '../interface/user-info'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url= 'data.json'
  constructor(private http: HttpClient) { }

  getConfig(url: string) {
    return this.http.get<Data>(this.url)
  }

  getConfigResponse(): Observable<HttpResponse<Data>> {
    return this.http.get<Data>(this.url, {observe: 'response'})
  }
}
