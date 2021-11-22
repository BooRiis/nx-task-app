import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import * as task from '../state/task.reducer';
import * as actions from '../state/task.actions';
import * as selectors from '../state/task.selector';
import * as data from '../interface'

@Injectable({
  providedIn: 'root'
})
export class ProfileFacadeService {

  userInit!: data.User
  contactInit!: data.Contact
  addressInit!: data.Address 
  socialNetworkInit!: data.SocialNetwork;


  userInit$ = this.store.pipe(select(selectors.getUser))
  contactInit$ = this.store.pipe(select(selectors.getContact))
  addressInit$ = this.store.pipe(select(selectors.getAddress))
  socialNetworkInit$ =  this.store.pipe(select(selectors.getSocials))

  constructor(private store: Store<task.ITaskDataState>) { 
    store.pipe(select(selectors.getUser)).subscribe(data => this.userInit = data)
    store.pipe(select(selectors.getContact)).subscribe(data => this.contactInit = data)
    store.pipe(select(selectors.getAddress)).subscribe(data => this.addressInit = data)
    store.pipe(select(selectors.getSocials)).subscribe(data => this.socialNetworkInit = data)
  }

  //dispatch for actions
  dispatch(action: Action){
    this.store.dispatch(action)
  }

  onNameEdit = (value: string, secondValue: string): void => {
    const newName: data.User = ({
      ...this.userInit,
      name: value,
      surname: secondValue
    })
    
    this.store.dispatch(actions.changeProfile({ user: newName}))
  }

  onDisplayNameEdit = (value: string): void => {
    const newUser: data.User = ({
      ...this.userInit,
      displayName: value
    })
    
    this.store.dispatch(actions.changeProfile({ user: newUser}))
  }

  onPhoneEdit = (value: string): void => {
    const newPhone: data.User = ({
      ...this.userInit,
      contact: {
        ...this.userInit.contact,
        phoneNumber: value
      },
    })

    this.store.dispatch(actions.changeProfile({ user: newPhone}))
  }

  onEmailEdit = (value: string): void => {
    const newEmail: data.User = ({
      ...this.userInit,
      contact: {
        ...this.userInit.contact,
        email: value
      },
    })

    this.store.dispatch(actions.changeProfile({ user: newEmail}))
  }

  onLocationEdit = (value: string): void => {
    const newLocation: data.LocationElement = ({
      ...this.userInit.contact.locations[0],
      address: {
        ...this.userInit.contact.locations[0].address,
        suburb: value
      },
    })

    const locations: data.LocationElement[] = Object.assign([], this.userInit.contact.locations);
    locations[0] = newLocation;

    this.store.dispatch(actions.changeLocation({ address: locations}))
  }

  onStreetEdit = (value: string, secondValue: string): void => {
    const newStreet: data.LocationElement = ({
      ...this.userInit.contact.locations[0],
      address: {
        ...this.userInit.contact.locations[0].address,
        streetName: value,
        streetNumber: secondValue
      },
    })

    const locations: data.LocationElement[] = Object.assign([], this.userInit.contact.locations);
    locations[0] = newStreet;

    this.store.dispatch(actions.changeLocation({ address: locations}))
  }

  onPostalCodeEdit = (value: string): void => {
    const newPostalCode: data.LocationElement = ({
      ...this.userInit.contact.locations[0],
      address: {
        ...this.userInit.contact.locations[0].address,
        postalCode: value
      },
    })

    const locations: data.LocationElement[] = Object.assign([], this.userInit.contact.locations);
    locations[0] = newPostalCode;

    this.store.dispatch(actions.changeLocation({ address: locations}))
  }

  onNetworkEdit = (value: string): void => {
    const newSocialNetwork: data.SocialNetwork = ({
      ...this.userInit.contact.socialNetworks[0],
      id: value
    })

    const network: data.SocialNetwork[] = Object.assign([], this.userInit.contact.socialNetworks);
    network[0] = newSocialNetwork;

    this.store.dispatch(actions.changeNetwork({ network: network}))
  }


}
