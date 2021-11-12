import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AllData } from "../store/app.state";



export const getTaskState = createFeatureSelector<AllData>('task');
export const getUserState = createFeatureSelector<AllData>('user');


export const getTask = createSelector(getTaskState, (state) => {
    return state.task
})

export const getUser = createSelector(getUserState, state => {
    return state.user
})