/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { Data, User, Contact, LocationElement, Address, SocialNetwork } from 'libs/core-lib/src/lib/interface/user-info';
import { AuthService } from 'libs/core-lib/src/lib/services/auth.service';
import {ApiService} from 'libs/core-lib/src/lib/services/api.service'
import { LocalStorageService } from 'libs/core-lib/src/lib/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'task-app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  defaultData!: Data;
  user!: User;
  contact!: Contact;
  location!: LocationElement[]; 
  addres!: Address;
  socialNetwork!: SocialNetwork;
  isAuth: boolean;

  constructor(
    private authService: AuthService,
    private api: ApiService,
    private route: Router,
    private localStorage: LocalStorageService
    ) {
      this.isAuth = this.authService.getAuth();
    }

  ngOnInit(): void {
    this.showConfig()
  }

  persist(key: string) {
    this.localStorage.set(key, this.isAuth)
  }

  logout() {
    this.removeKey('access-token')
    this.goTo('introduction')
  }

  removeKey(key: string) {
    this.localStorage.remove(key)
  }

  goTo = (page: string) => {
    this.route.navigate([page])
    .then(() => {
      window.location.reload()
    })
  }

  showConfig() {
    this.api.getConfig()
    .subscribe((data: Data) => {
      this.defaultData = data;
      this.user = data.user;
      this.contact = data.user.contact;
      this.location = data.user.contact.locations;
      this.addres = data.user.contact.locations[0].address;
      this.socialNetwork = data.user.contact.socialNetworks[0];
    })
  }

}
