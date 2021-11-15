import { 
    Data, User, Contact, LocationElement, Address, SocialNetwork
   } from '@task-app/core-lib';

export interface AllData {
    task: Data
    user: User
    contact: Contact
    location: LocationElement[]
    address: Address
    social: SocialNetwork
}