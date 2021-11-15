import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITaskDataState } from './task.reducer';

export const getTaskState = createFeatureSelector<ITaskDataState>('task');


export const getUser = createSelector(getTaskState, state => {
    return state.data.user
})


export const getContact = createSelector(getTaskState, state => {
    return state.data.user.contact
})


export const getAddress = createSelector(getTaskState, state => {
    return state.data.user.contact.locations[0].address
})


export const getSocials = createSelector(getTaskState, state => {
    return state.data.user.contact.socialNetworks[0]
})