import { createFeatureSelector, createSelector, on } from "@ngrx/store";
import { AllData } from "../store/app.state";



export const getTaskState = createFeatureSelector<AllData>('task');


export const getUser = createSelector(getTaskState, state => {
    return state.user
})


export const getContact = createSelector(getTaskState, state => {
    return state.user.contact
})


export const getAddress = createSelector(getTaskState, state => {
    return state.user.contact.locations[0].address
})


export const getSocials = createSelector(getTaskState, state => {
    return state.user.contact.socialNetworks[0]
})