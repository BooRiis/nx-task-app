/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { 
  Data, User, Contact, LocationElement, Address, SocialNetwork,
  AuthService, ApiService, LocalStorageService
 } from '@task-app/core-lib';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { 
  getAddress,
  getContact, 
  getSocials,
  getUser,
  ITaskDataState,
  changeProfile,
  changeLocation,
} from '@task-app/core-lib/state';

@Component({
  selector: 'task-app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  formGroup!: FormGroup;
  defaultData!: Observable<Data>;
  user!: User;
  contact!: Contact;
  location!: LocationElement[]; 
  address!: Address;
  socialNetwork!: SocialNetwork;
  isAuth: boolean;  
  reactiveForm = new FormGroup({
    displayName: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl()
    })
  })

  constructor(
    private authService: AuthService,
    private api: ApiService,
    private route: Router,
    private localStorage: LocalStorageService,
    private store: Store<{task: ITaskDataState}>
    ) {
      this.isAuth = this.authService.getAuth();
    }
    
    ngOnInit(): void {
      //this.showConfig()
      this.store.pipe(select(getUser)).subscribe(data => {
        this.user = data
      })
      this.store.pipe(select(getContact)).subscribe(data => this.contact = data)
      this.store.pipe(select(getAddress)).subscribe(data => this.address = data)
      this.store.pipe(select(getSocials)).subscribe(data => this.socialNetwork = data)

    }
    
    submitForm(event: Event) {
      event.preventDefault();
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

  onDisplayNameEdit = (): void => {
    const newUser: User = ({
      ...this.user,
      displayName: this.reactiveForm.get('displayName')?.value
    })
    
    this.store.dispatch(changeProfile({ user: newUser}))
  }

  onPhoneEdit = (value: string): void => {
    const newPhone: User = ({
      ...this.user,
      contact: {
        ...this.user.contact,
        phoneNumber: value
      },
    })

    this.store.dispatch(changeProfile({ user: newPhone}))
  }

  onEmailEdit = (value: string): void => {
    const newEmail: User = ({
      ...this.user,
      contact: {
        ...this.user.contact,
        email: value
      },
    })

    this.store.dispatch(changeProfile({ user: newEmail}))
  }

  onLocationEdit = (value: string): void => {
    const newLocation: LocationElement = ({
      ...this.user.contact.locations[0],
      address: {
        ...this.user.contact.locations[0].address,
        suburb: value
      },
    })

    const locations: LocationElement[] = Object.assign([], this.user.contact.locations);
    locations[0] = newLocation;

    this.store.dispatch(changeLocation({ address: locations}))
  }
  

  // showConfig() {
  //   this.api.getConfig()
  //   .subscribe((data: Data) => {
  //     //this.defaultData = data;
  //     //this.user = data.user;
  //     //this.contact = data.user.contact;
  //     //this.location = data.user.contact.locations;
  //     //this.addres = data.user.contact.locations[0].address;
  //     //this.socialNetwork = data.user.contact.socialNetworks[0];
  //   })
  // }

}
