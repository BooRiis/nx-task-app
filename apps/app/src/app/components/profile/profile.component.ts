/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { 
  User, Contact, LocationElement, Address, SocialNetwork,
  AuthService, LocalStorageService, ProfileFacadeService
 } from '@task-app/core-lib';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'task-app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  formGroup!: FormGroup;
  user$!: Observable<User>;
  user!: User;
  contact$!: Observable<Contact>;
  contact!: Contact;
  location!: LocationElement[]; 
  address!: Address;
  address$!: Observable<Address>;
  socialNetwork!: SocialNetwork;
  socialNetwork$!: Observable<SocialNetwork>;
  isAuth: boolean;


  reactiveForm = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    displayName: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    streetName: new FormControl(),
    streetNumber: new FormControl(),
    suburb: new FormControl(),
    postalCode: new FormControl(),
    network: new FormControl(),
  })

  constructor(
    private authService: AuthService,
    private route: Router,
    private localStorage: LocalStorageService,
    private facade: ProfileFacadeService
    ) {
      this.isAuth = this.authService.getAuth();
    }
    
    ngOnInit(): void {
      //this.showConfig()
      // this.store.pipe(select(getUser)).subscribe(data => {
      //   this.user = data
      // })
      // this.store.pipe(select(getContact)).subscribe(data => this.contact = data)
      // this.store.pipe(select(getAddress)).subscribe(data => this.address = data)
      // this.store.pipe(select(getSocials)).subscribe(data => this.socialNetwork = data)

      this.user$ = this.facade.userInit$
      this.contact$ = this.facade.contactInit$
      this.address$ = this.facade.addressInit$
      this.socialNetwork$ = this.facade.socialNetworkInit$

    }
  

  //local storage
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


  onNameEdit = (): void => {
    this.facade.onNameEdit(this.reactiveForm.get('name')?.value, this.reactiveForm.get('surname')?.value)
  }

  //edit

  onDisplayNameEdit = (): void => {
    this.facade.onDisplayNameEdit(this.reactiveForm.get('displayName')?.value)
  }

  onPhoneEdit = (): void => {
    this.facade.onPhoneEdit(this.reactiveForm.get('phoneNumber')?.value)
  }

  onEmailEdit = (): void => {
    this.facade.onEmailEdit(this.reactiveForm.get('email')?.value)
  }

  onLocationEdit = (): void => {
    this.facade.onLocationEdit(this.reactiveForm.get('suburb')?.value)
  }

  onStreetEdit = (): void => {
    this.facade.onStreetEdit(this.reactiveForm.get('streetName')?.value, this.reactiveForm.get('streetNumber')?.value)
  }

  onPostalCodeEdit = (): void => {
    this.facade.onPostalCodeEdit(this.reactiveForm.get('postalCode')?.value)
  }

  onNetworkEdit = (): void => {
    this.facade.onNetworkEdit(this.reactiveForm.get('network')?.value)
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
