import { createAction, props } from "@ngrx/store";
import { Address, Contact, Data, LocationElement, SocialNetwork, User } from "../interface";


export const LOAD_DATA = '[Username Component] sending data...';
export const LOAD_DATA_SUCCESS = '[Username effect] load data success';
export const IS_ONBOARDED =  '[isOnboarded Auth] isOnboraded = true'
;

export const sendingApiData = createAction(
    LOAD_DATA,
    props<{url: string}>()
)


export const loadDataSuccess = createAction(
    LOAD_DATA_SUCCESS,
    props<{ data: Data}>()
)


export const loadDataFailure = createAction(
    '[Username Component] load data failure',
    props<{ error: any}>()
)

export const isOnboarded = createAction(
    IS_ONBOARDED,
    props<{onboarded: boolean}>()
)

export const changeProfile = createAction(
    '[Profile change]',
    props<{ user: User}>()
)


export const changeLocation = createAction(
    '[Profile change location]',
    props<{ address: LocationElement[]}>()
)

export const changeNetwork = createAction(
    '[Profile change network]',
    props<{ network: SocialNetwork[]}>()
)