

export interface Data {
    onboarded: boolean;
    user:      User;
}

export interface User {
    name:        string;
    surname:     string;
    displayName: string;
    password:    string;
    contact:     Contact;
}
export interface Contact {
    email:          string;
    phoneNumber:    string;
    locations:      LocationElement[];
    socialNetworks: SocialNetwork[];
}

export interface LocationElement {
    id:       string;
    name:     string;
    location: LocationLocation;
    address:  Address;
}

export interface Address {
    streetName:      string;
    streetNumber:    string;
    suburb:          string;
    stateOrProvince: string;
    complex?:        string;
    postalCode:      string;
    city:            string;
    country:         string;
    addressString:   string;
}

export interface LocationLocation {
    latitude:  number;
    longitude: number;
}

export interface SocialNetwork {
    id:   string;
    name: string;
    url:  string;
}