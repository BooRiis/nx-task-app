/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { 
  Data, User, Contact, LocationElement, Address, SocialNetwork,
  AuthService, ApiService, LocalStorageService
 } from '@task-app/core-lib';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTask, getUser } from '../../state/task.selector';
@Component({
  selector: 'task-app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  defaultData!: Observable<Data>;
  //user!: User;
  user!: Observable<User>;
  contact!: Contact;
  location!: LocationElement[]; 
  addres!: Address;
  socialNetwork!: SocialNetwork;
  isAuth: boolean;

  constructor(
    private authService: AuthService,
    private api: ApiService,
    private route: Router,
    private localStorage: LocalStorageService,
    private store: Store<{task: Data}>
    ) {
      this.isAuth = this.authService.getAuth();
    }
    
    ngOnInit(): void {
      this.showConfig()
      this.defaultData = this.store.select(getTask)
      this.user = this.store.pipe(select(getUser))
    }

  persist(key: string) {
    this.localStorage.set(key, this.isAuth)
  }

  logout() {
    this.removeKey('access_token')
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
      //this.defaultData = data;
      //this.user = data.user;
      this.contact = data.user.contact;
      this.location = data.user.contact.locations;
      this.addres = data.user.contact.locations[0].address;
      this.socialNetwork = data.user.contact.socialNetworks[0];
    })
  }

}
